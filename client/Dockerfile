# Étape 1 : build de l'application React
FROM node:22.1.0 AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . . 
RUN npm run build

# Étape 2 : serveur web Nginx pour servir l'app
FROM nginx:alpine

# Copie du build React dans le dossier utilisé par Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copie d'un fichier de configuration Nginx personnalisé (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
