FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/java_app.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
