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

EXPOSE 8080

# Run the Vue app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

#CMD ["nginx", "-g", "daemon off;"]