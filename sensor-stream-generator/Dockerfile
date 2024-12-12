FROM node:20.11-alpine

RUN apk upgrade --no-cache

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

ENV HOST=0.0.0.0
ENV PORT=4000

RUN npm run build
CMD [ "npm", "run", "start" ]
