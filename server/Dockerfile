# Pull the Node image from Docker Hub
FROM node:19-slim

# Setting Working Directory
WORKDIR /usr/app

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 3080

CMD ["npm", "run", "dev:docker"]