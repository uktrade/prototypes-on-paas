FROM node:16.13 as base

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . ./

EXPOSE 3000

CMD [ "node", "start.js" ]
