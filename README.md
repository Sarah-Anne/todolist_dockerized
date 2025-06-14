
---
<p style="text-align:center; color:orange; font-weight: bold;">
📋 ToDo List - Projet Web Collaboratif
</p>


Ce projet est une application web de gestion de tâches (ToDo List) développée dans un cadre académique en groupe. Il permet d’ajouter, modifier, supprimer et visualiser des tâches via une interface simple et.

---------------------------------------

## Fonctionnalités principales

- Création d’une tâche 
- Modification d’une tâche existante  
- Suppression d’une tâche  
- Visualisation des tâches sous forme de liste  

--------------------------------------------------------------

## Technologies utilisées

### Frontend
- React.js  
- CSS 

### Backend
- Node.js avec Express.js  
- MySQL 

----------------------------------------------------------------

## Installation du projet

### Prérequis

- Node.js  
- Express.js
- MySQL 
- Git 
- Docker & Docker Compose  

-----------------------------------------------------------------------

###  Lancer l'application

1. Aller sur le terminal de docker et se placer au niveau du répertoir du docker compose dans le dossier

2. Exécuter la commande :

bash
docker-compose up --build


> L'application sera disponible sur http://localhost

---------------------------------------------------------------------

## Structure du projet

todolist/
├── .git/
├── client/                # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── style.css
├── docker/
│   └── dockerfile.react
├── server/                # Backend Node/Express
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── server.js
├── docker-compose.yml
├── nginx.conf
└── README.md

----------------------------------------------------------------------

## Membres du projet

- *Najad Naar Diop* – Développement frontend & backend  
- *Assétou Keïta* – Sécurité  
- *Ibrahim Diaw & Baï Sarah Anne Gbaguidi* – Dockerisation  
- *Ibrahim Diaw & Baï Sarah Anne Gbaguidi* – Infrastructure  


----------------------------------------------------------------------

##  Remarques

- Le backend et le frontend sont séparés en deux projets.  
- La base de données peut être locale ou distante.  
- Aucune authentification utilisateur n’a été intégrée.  

-------------------------------------------------------------------

## Licence

Ce projet est libre pour un usage académique. Toute réutilisation doit mentionner les auteurs.

---------------------------------------------------------------------