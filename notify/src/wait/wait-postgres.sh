#!/bin/sh
/root/wfi/wait-for-it.sh postgresql:5432 -s -t 60  -- /bin/sh /root/run.sh