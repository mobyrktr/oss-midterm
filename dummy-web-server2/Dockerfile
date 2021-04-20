FROM node:15.14.0-alpine3.10

WORKDIR /app

COPY package.json .
RUN npm config set package-lock false
RUN npm install

COPY . .
CMD ["npm", "start"]