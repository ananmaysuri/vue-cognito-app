# Base image
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Serve the app using serve package
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

# Expose the port
EXPOSE 5000
