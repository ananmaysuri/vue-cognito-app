# Base image
FROM --platform=linux/amd64 node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Install a HTTP server to serve static files
RUN npm install -g http-server

# Expose the port
EXPOSE 5000

# Use the http-server to serve the static files from the dist directory
CMD ["http-server", "dist", "-p", "5000"]