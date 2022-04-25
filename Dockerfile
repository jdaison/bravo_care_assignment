FROM node:16.14.2-alpine3.14

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install --only=production
COPY . .
EXPOSE 3000
RUN npm runt db:reset:dev
CMD ["node", "app.js"]