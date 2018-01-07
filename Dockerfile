FROM node:9-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn && rm ~/.cache -rf

COPY . ./

CMD ["node", "dist"]