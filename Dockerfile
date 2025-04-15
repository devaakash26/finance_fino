FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"] 