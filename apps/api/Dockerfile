FROM node:14.19-alpine3.15

RUN npm install webpack


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .