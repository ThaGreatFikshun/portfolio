FROM node

WORKDIR /client

COPY package*.json /client/

RUN npm install

COPY . /client/

EXPOSE 5000

CMD ["npm", "start"]