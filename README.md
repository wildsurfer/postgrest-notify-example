Readme coming soon...
---------------------

Postgresql:

```
bash-3.2$ docker-compose exec postgresql psql -U postgres
psql (9.5.3)
Type "help" for help.

postgres=# postgres=# SELECT pg_notify('mychannel', 'Ololo!');
 pg_notify
 -----------

 (1 row)
```
