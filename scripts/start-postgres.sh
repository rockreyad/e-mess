#!/bin/bash
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

POSTGRES_VERSION=15
CONTAINER_NAME=emess-postgres
VOLUME_NAME=emess-volume
POSTGRES_PASSWORD=postgres
HOST_PORT=5432

docker pull postgres:$POSTGRES_VERSION
docker volume create $VOLUME_NAME

docker run \
  --name $CONTAINER_NAME \
  -e POSTGRES_USER=$POSTGRES_USER \
  -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  -p $HOST_PORT:5432 \
  -v ${script_dir}/../db-backups:/backup \
  -v $VOLUME_NAME:/var/lib/postgresql/data \
  -d postgres:$POSTGRES_VERSION

docker ps