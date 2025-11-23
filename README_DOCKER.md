# 🐳 Docker Quick Reference

Quick reference for Docker commands to run your Jekyll blog without installing Ruby locally.

## 🚀 Quick Start

```bash
# Start development server
docker-compose up

# Or using Make (if available)
make up

# Access at http://localhost:4000
```

## 📋 Common Commands

### Using Docker Compose

```bash
# Start server
docker-compose up

# Start in background
docker-compose up -d

# Stop server
docker-compose down

# View logs
docker-compose logs -f

# Rebuild after Gemfile changes
docker-compose build
docker-compose up
```

### Using Makefile

```bash
make up          # Start server
make down        # Stop server
make logs        # View logs
make shell       # Access container shell
make rebuild     # Rebuild image
make clean       # Clean up everything
```

### Using Docker directly

```bash
# Pre-pull the base Jekyll image (optional)
docker pull jekyll/jekyll

# Build image
docker build -t jekyll-blog:latest .

# Run container
docker run -it --rm -p 4000:4000 -v $(pwd):/srv/jekyll jekyll-blog:latest

# Access shell
docker exec -it jekyll-blog-dev /bin/bash
```

## 🎯 Production Build

```bash
# Build production image (nginx)
docker build -f Dockerfile.prod -t jekyll-blog:prod .

# Run production container
docker run -d -p 8080:80 --name jekyll-blog-prod jekyll-blog:prod
```

## 📚 Full Documentation

See `DOCKER_GUIDE.md` for comprehensive documentation.

