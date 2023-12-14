FROM public.ecr.aws/docker/library/node:16-alpine

WORKDIR app

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 8088

CMD ["npm", "start"]