FROM node:21-alpine3.18

WORKDIR /app

COPY  . .

RUN npm i 

EXPOSE 8080

CMD [ "node","./index.js" ]