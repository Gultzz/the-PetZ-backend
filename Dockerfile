FROM node:16.19.0-alpine AS base

WORKDIR /usr/dev/thepetz-backend

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5000

CMD npm run start