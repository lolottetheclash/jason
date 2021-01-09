FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
RUN npm i 

COPY public public
COPY src src

CMD npm run start