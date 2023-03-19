# Pull the Node image from Docker Hub
FROM node:14-slim

# bind your app to the gateway IP
ENV HOST=0.0.0.0

# Setting Working Directory
WORKDIR /usr/app

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 8080

# Run the Vue app
ENTRYPOINT ["npm", "run", "dev"]

#CMD [ "http-server", "dist" ]