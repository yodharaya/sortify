# Stage 1: Build the application
FROM node:24-alpine3.20 AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package.json yarn.lock* package-lock.json* ./

# Install production dependencies only
RUN npm install --omit=dev --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production runtime
FROM node:24-alpine3.20

WORKDIR /app

# Install production dependencies (clean install)
COPY package.json .
RUN npm install --omit=dev --frozen-lockfile

# Copy built artifacts from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

COPY --from=builder /app/.env ./

# Environment variables should be provided at runtime
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000 || exit 1

# Start in production mode
CMD ["npm", "start"]