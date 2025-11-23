# Makefile for Jekyll Blog Docker Commands
# Provides easy shortcuts for common Docker operations

.PHONY: help build up down logs shell restart clean rebuild production

# Default target
help:
	@echo "Jekyll Blog Docker Commands"
	@echo ""
	@echo "Available commands:"
	@echo "  make up          - Start the development server"
	@echo "  make down        - Stop the development server"
	@echo "  make build       - Build the Docker image"
	@echo "  make rebuild     - Rebuild the Docker image from scratch"
	@echo "  make logs        - View container logs"
	@echo "  make shell       - Access container shell"
	@echo "  make restart     - Restart the development server"
	@echo "  make clean       - Stop and remove containers, volumes"
	@echo "  make production  - Build production image"
	@echo ""

# Start development server
up:
	docker-compose up

# Start development server in detached mode
up-d:
	docker-compose up -d

# Stop development server
down:
	docker-compose down

# Build Docker image
build:
	docker-compose build

# Rebuild Docker image (no cache)
rebuild:
	docker-compose build --no-cache

# View logs
logs:
	docker-compose logs -f

# Access container shell
shell:
	docker-compose exec jekyll /bin/bash

# Restart containers
restart:
	docker-compose restart

# Clean up (containers, volumes)
clean:
	docker-compose down -v
	@echo "Containers and volumes removed"

# Build production image
production:
	docker build -f Dockerfile.prod -t jekyll-blog:prod .
	@echo "Production image built: jekyll-blog:prod"
	@echo "Run with: docker run -d -p 8080:80 --name jekyll-blog-prod jekyll-blog:prod"

# Run Jekyll commands in container
jekyll:
	docker-compose exec jekyll jekyll $(filter-out $@,$(MAKECMDGOALS))

# Bundle commands in container
bundle:
	docker-compose exec jekyll bundle $(filter-out $@,$(MAKECMDGOALS))

%:
	@:

