FROM node:20-alpine

# Install dependencies only when needed - better layer caching
WORKDIR /app

# Add package management files
COPY package.json package-lock.json ./

# Install only production dependencies to reduce size and improve speed
RUN npm ci --only=production

# Copy only necessary files
COPY next.config.mjs ./
COPY postcss.config.mjs ./
COPY tailwind.config.mjs ./
COPY jsconfig.json ./
COPY components.json ./
COPY .env ./
COPY prisma ./prisma
COPY public ./public
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY hooks ./hooks
COPY actions ./actions
COPY emails ./emails
COPY data ./data

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"] 