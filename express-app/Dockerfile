FROM public.ecr.aws/docker/library/node:16-alpine

WORKDIR app

COPY package.json .

RUN npm install

COPY .. ./

RUN ls -ll

RUN chmod 755 docker/express-app/entrypoint.sh

EXPOSE 8088

ENTRYPOINT ["/bin/sh", "-c", "docker/entrypoint.sh"]
