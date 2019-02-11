#!/bin/bash

is_ready() {
  `[ $(curl --write-out %{response_code} --silent --output /dev/null http://$ELASTICSEARCH_HOST:$ELASTICSEARCH_PORT/_cat/health?h=st) = 200 ]`
}

# wait until is ready
i=0
while ! is_ready; do
  i=`expr $i + 1`
  if [ $i -ge 20 ]; then
    echo "$(date) - still not ready, giving up"
    exit 1
  fi
  echo "$(date) - waiting for elasticsearch"
  sleep 2
done

exec "$@"