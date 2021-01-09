FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
RUN npm i 

COPY controllers controllers
COPY models models
COPY routes routes
COPY server.js server.js

CMD npm run server