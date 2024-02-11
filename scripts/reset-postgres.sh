#!/bin/bash

CONTAINER_NAME=emess-postgres
VOLUME_NAME=emess-volume
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd)"

printf "\n⌛️ Stop container \"${CONTAINER_NAME}\" ...\n"
docker stop $CONTAINER_NAME > /dev/null 2>&1

printf "\n⌛️ Remove container \"${CONTAINER_NAME}\" ...\n"
docker rm ${CONTAINER_NAME} > /dev/null 2>&1

printf "\n⌛️ Remove volume \"${VOLUME_NAME}\" ...\n"
docker volume rm ${VOLUME_NAME} > /dev/null 2>&1

printf "\n⌛️ Start postgres ...\n\n"
source "${SCRIPT_DIR}/start-postgres.sh"


printf "\n☕️ All done!\n"