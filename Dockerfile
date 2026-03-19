# Use a alpine version of Node for a smaller, faster image
FROM node:24-alpine

# Set the working directory
WORKDIR /src

# Copy only package files first (better for caching)
COPY package*.json ./
RUN npm install

# Copy your actual API code
COPY . .

# Tell Docker the API uses port 1000
EXPOSE 2000

# Start the application
CMD ["npm", "test"]
