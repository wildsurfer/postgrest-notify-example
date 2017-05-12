FROM rabbitmq:3.6.9-management-alpine

COPY ./pgsql-listen-exchange/* /plugins/
RUN rabbitmq-plugins enable pgsql_listen_exchange
