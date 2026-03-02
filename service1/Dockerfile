FROM node:18

WORKDIR /app

COPY service1/package*.json ./
RUN npm install

COPY service1/. .

EXPOSE 3000


CMD ["node", "app.js"]


