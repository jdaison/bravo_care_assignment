FROM node:16.14.2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install --only=production
COPY . .
RUN chmod +x wait-for-it.sh
EXPOSE 3000
CMD ["npm", "start"]