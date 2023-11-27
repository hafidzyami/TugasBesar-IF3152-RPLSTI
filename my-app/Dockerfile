# Fetching the minified node image on apline linux
FROM node:slim

# Setting up the work directory
WORKDIR /my-app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

RUN npm run build

# Starting our application
CMD [ "npm", "start" ]