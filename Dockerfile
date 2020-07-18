FROM node:12

WORKDIR /srv/app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm", "start"]
