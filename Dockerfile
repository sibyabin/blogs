# Dockerfile for Jekyll Blog Development
# Uses official Jekyll image with all dependencies pre-installed
FROM jekyll/jekyll

# Set working directory
WORKDIR /srv/jekyll

# Copy Gemfile and Gemfile.lock (if exists)
COPY Gemfile Gemfile.lock* ./

# Install dependencies
RUN bundle install

# Expose Jekyll's default port
EXPOSE 4000

# Default command (can be overridden in docker-compose.yml or docker run)
CMD ["jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--incremental", "--force_polling"]

