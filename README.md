Readme coming soon...
---------------------

For correct work you need to run npm install in `notify/app`
```
cd notify/app
npm install
```

RabbitMq Exchange: `rabbit.notify` <br>
RabbitMq Type: `topic`


Postgresql:

```
bash-3.2$ docker-compose exec postgresql psql -U postgres
psql (9.5.3)
Type "help" for help.

postgres=# postgres=# SELECT pg_notify('messanger', 'Ololo!');
 pg_notify
 -----------

 (1 row)
```
