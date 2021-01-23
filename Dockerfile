FROM node:14-slim

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /onbitforms-client

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

RUN npm install -g @angular/cli

COPY package*.json ./

RUN npm i

COPY . .
