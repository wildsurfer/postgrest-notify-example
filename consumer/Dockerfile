FROM php:7.1.4-alpine

WORKDIR /root/app

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');"

# Install php-amqplib dependencies
RUN apk --no-cache add unzip zlib-dev
RUN docker-php-ext-install bcmath sockets

COPY ./src /root/app
RUN php composer.phar install --no-interaction

CMD "./receive"
