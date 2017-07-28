Readme coming soon...
---------------------

RabbitMq Exchange: `rabbit.notify` <br>
RabbitMq Type: `topic`


Postgresql:

```
bash-3.2$ docker-compose exec postgresql psql -U postgres
psql (9.5.3)
Type "help" for help.

postgres=# SELECT pg_notify('messenger', 'Ololo!');
 pg_notify
 -----------

 (1 row)
```
