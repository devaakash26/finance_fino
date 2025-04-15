# Docker Instructions for Finance App (Production)

## Prerequisites
- Install Docker Desktop on your computer

## Running in Production Mode

### Step 1: Build and start the container
```bash
docker-compose up --build
```

### Step 2: Access your application
Open your web browser and go to: http://localhost:3000

### Step 3: Run in detached mode (recommended for production)
```bash
docker-compose up -d
```

### Step 4: Check logs if needed
```bash
docker-compose logs -f
```

## Performance Optimizations Made
1. **Faster Build Process**
   - Only copies necessary files
   - Uses npm ci for faster and more reliable installs
   - Optimized for production use

2. **Reduced Image Size**
   - Only includes production dependencies
   - Only copies needed files
   - No dev dependencies included

3. **Reliability Improvements**
   - Container automatically restarts if it crashes
   - Configured for production environment

## Management Commands

### View running containers
```bash
docker ps
```

### Stop all containers
```bash
docker-compose down
```

### Rebuild everything from scratch
```bash
docker-compose down
docker system prune -f
docker-compose up --build
```

## Troubleshooting

### If the container is slow to build
```bash
# Clean Docker system
docker system prune -f
docker volume prune -f

# Rebuild with clean cache
docker-compose build --no-cache
docker-compose up
```

### If the application doesn't start
Check the logs for errors:
```bash
docker-compose logs -f
```

## Other Useful Commands

### Run in background mode
```bash
docker-compose up -d
```

### Stop background containers
```bash
docker-compose down
```

### View logs when running in background
```bash
docker-compose logs
```

## What This Does
This Docker setup takes your Next.js finance application and packages it into a container, making it easy to run consistently on any computer with Docker installed while allowing you to actively develop. 