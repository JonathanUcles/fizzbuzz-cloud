FROM node:16 as build
WORKDIR /app

COPY package*.json .
COPY yarn.lock .
RUN yarn install

COPY . /app
RUN yarn build
