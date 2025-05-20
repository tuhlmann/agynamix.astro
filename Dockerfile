FROM node:18 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build with custom mode
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime

# Copy custom nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built files to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html
