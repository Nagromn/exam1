# --- BUILD STAGE ---
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- PRODUCTION STAGE ---
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# supprime la conf par défaut
RUN rm /etc/nginx/conf.d/default.conf

# ajoute TA conf si tu en as une
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
