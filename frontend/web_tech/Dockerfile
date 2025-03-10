# Use Node.js as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend files
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the built frontend
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Start the frontend
CMD ["serve", "-s", "build", "-l", "3000"]
