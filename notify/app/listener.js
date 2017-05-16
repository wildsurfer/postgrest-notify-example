#!/usr/bin/env node

let amqp = require('amqplib/callback_api');
let PS = require('pg-pubsub');

let rabbitConnectionString = process.env.RABBIT_CONNECTION_STRING || 'amqp://guest:guest@rabbitmq';

let cn = {
    host: process.env.POSTGRES_HOST || "postgresql", // server name or IP address;
    port: 5432,
    database: process.env.POSTGRES_DATABASE || "test",
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "DGH5k39xchgh3Po",
    getConnectionString: function () {
        return 'postgres://' + this.user + ':' + this.password + '@' + this.host + '/' + this.database;
    }
};

let ps = new PS(cn.getConnectionString());

ps.addChannel('messenger', function(payload){
    amqp.connect(rabbitConnectionString, function(err, conn) {
        conn.createChannel(function(err, ch) {
            ch.assertExchange('rabbit.notify', 'topic', {durable: false});
            ch.publish('rabbit.notify', "", new Buffer(JSON.stringify(payload)));
            console.log(" [x] Messenger: ", payload);
        });
    });
});


