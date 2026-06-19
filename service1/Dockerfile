#FROM node:18

FROM public.ecr.aws/docker/library/node:18-alpine AS base

WORKDIR /app

COPY service1/package*.json ./
RUN npm install

COPY service1/. .

EXPOSE 3000


CMD ["node", "app.js"]


