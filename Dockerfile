FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# If you have TypeScript, build it
# RUN npm run build

# -------- Stage 2: Run backend --------
FROM node:20-alpine

WORKDIR /app

# Copy node_modules and source from builder
COPY --from=builder /app ./

# Expose port your backend runs on
EXPOSE 3000

# Start your backend
CMD ["node", "app.js"]
