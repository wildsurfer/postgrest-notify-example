FROM node:6.9.2-alpine
COPY ./app/config.json /root/
COPY ./app/ /var/www/html/web/
COPY ./src/wait /root/
RUN chmod +x /root/start.sh
RUN chmod +x /root/run.sh
RUN apk add --update supervisor
CMD mkdir /etc/supervisor.d
COPY ./src/supervisor/conf/listener.ini /etc/supervisor.d/notifications.ini
CMD /bin/sh /root/start.sh