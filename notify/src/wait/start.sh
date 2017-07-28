#!/bin/sh
/root/wfi/wait-for-it.sh rabbitmq:5672 -s -t 60  -- /bin/sh /root/wait-postgres.sh