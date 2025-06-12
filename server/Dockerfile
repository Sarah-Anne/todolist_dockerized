FROM node:22

WORKDIR /app

COPY package*.json ./

# Réglage réseau pour éviter les erreurs ECONNRESET
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm install

COPY . .

EXPOSE 4040

CMD ["node", "server.js"]
