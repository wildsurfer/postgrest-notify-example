FROM rabbitmq:3.6.9-management-alpine

COPY ./plugins/* /plugins/

RUN rabbitmq-plugins enable --offline rabbitmq_management
RUN rabbitmq-plugins enable --offline rabbitmq_delayed_message_exchange
