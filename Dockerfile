FROM node:18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install
COPY . /usr/src/app

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3001