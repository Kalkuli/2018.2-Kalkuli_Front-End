# Base image
FROM node:10.1.0

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy project to app directory inside the image
COPY . /app
COPY package.json /usr/src/app/package.json

# Install packages
RUN npm install --silent

# Tell Docker about the port we'll run on.
EXPOSE 3000

# Run the server 
CMD ["npm", "start"]