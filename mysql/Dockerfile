FROM public.ecr.aws/docker/library/mysql:8.0.33

ENV MYSQL_ROOT_PASSWORD="password"
ENV MYSQL_DATABASE="db_business"

ADD db_backup.sql docker-entrypoint-initdb.d/db_backup.sql