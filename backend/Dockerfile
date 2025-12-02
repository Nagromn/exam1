FROM node:22-alpine

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install --production

# Copier le code
COPY . .

# Exposer le port (5000 ou autre selon ton backend)
EXPOSE 5000

# Lancer le serveur
CMD ["node", "server.js"]
