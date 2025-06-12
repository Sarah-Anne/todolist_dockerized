# Étape 1 : build de l'application React
FROM node:22.1.0 AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Nginx pour servir le build React
FROM nginx:alpine

# Copie du build React dans le dossier public de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copie de la configuration personnalisée Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
