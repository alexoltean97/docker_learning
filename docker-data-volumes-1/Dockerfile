FROM node:14

ARG DEFAULT_PORT=80

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

# VOLUME ["app/node_modules]

CMD ["npm", "start"]


