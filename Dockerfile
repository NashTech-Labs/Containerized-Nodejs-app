FROM node:alpine3.16

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8080
CMD [ "node", "./src/app.js" ]