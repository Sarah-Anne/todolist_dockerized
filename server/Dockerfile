# Utilise une image officielle Node.js LTS (version 22)
FROM node:22

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie uniquement package.json et package-lock.json pour optimiser le cache Docker
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application dans le conteneur
COPY . .

# Expose le port sur lequel l'app écoute
EXPOSE 4040

# Démarre le serveur Node.js
CMD ["node", "server.js"]
