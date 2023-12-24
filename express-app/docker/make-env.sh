#!/bin/sh

if [ ! -f ".env" ]; then
    echo "Creating env file for env $APP_ENV"
    echo "DB_HOST=$DB_HOST" >> .env
    echo "DB_USER=$DB_USER" >> .env
    echo "DB_PASSWORD=$DB_PASSWORD" >> .env
    echo "DB_NAME=$DB_NAME" >> .env
    echo "DB_PORT=$DB_PORT" >> .env
    echo "APP_PORT=$APP_PORT" >> .env
    echo "APP_ENV=$APP_ENV" >> .env
    echo "AWS_REGION=$AWS_REGION" >> .env
    echo "SECRET_MANAGER_NAME=$SECRET_MANAGER_NAME" >> .env

    case "$APP_ENV" in
    "development")
        echo "developmenttttt"
        echo "LOCAL_TEST_SECRET_MANAGER=$LOCAL_TEST_SECRET_MANAGER" >> .env
        echo "AWS_ACCESSKEYID=$AWS_ACCESSKEYID" >> .env
        echo "AWS_SECRETKEY=$AWS_SECRETKEY" >> .env
    ;;
    esac
else
    echo "env file exists."
fi
