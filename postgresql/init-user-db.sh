#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -h localhost <<-EOSQL

CREATE DATABASE test;
\c test 

BEGIN;

create table if not exists
message (
    id SERIAL PRIMARY KEY,
    message text not null
);

CREATE OR REPLACE FUNCTION rabbitmq_notify() RETURNS trigger AS \$$
  BEGIN
      PERFORM pg_notify('mychannel', row_to_json(NEW)::text);
      return NEW;
  END;
\$$ LANGUAGE plpgsql;

CREATE TRIGGER message_insert
    AFTER INSERT
    ON message
    FOR EACH ROW
    EXECUTE PROCEDURE rabbitmq_notify();

COMMIT;

EOSQL

