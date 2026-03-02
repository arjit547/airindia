FROM node:18

WORKDIR /app

COPY services2/package*.json ./
RUN npm install

COPY services2/. .

EXPOSE 3001


CMD ["node", "app.js"]

