Projet de Cours en Ligne
Présentation
Cette application permet aux utilisateurs de se connecter et d'accéder à des modules de cours en ligne. L'application est sécurisée via un système d'authentification par JWT (JSON Web Token), qui garantit que seuls les utilisateurs authentifiés peuvent accéder aux ressources protégées. L'application est construite en utilisant React, TypeScript, Redux Toolkit (avec RTK Query) pour la gestion des requêtes API, et Tailwind CSS pour la mise en forme.

Stacks techniques
Front-end : React avec TypeScript
Gestion de l'état global : Redux Toolkit (RTK Query)
API : Consommation d'une API REST sécurisée avec JWT
Styling : Tailwind CSS pour une interface utilisateur moderne et responsive
Authentification : JWT (JSON Web Token) pour protéger l'accès aux ressources


Structure de la Base de Données
La base de données contient deux entités principales : User et Module.

Tables :
User

id (int) : Identifiant unique de l'utilisateur
username (string) : Nom d'utilisateur
email (string) : Email de l'utilisateur
password (string) : Mot de passe haché
Module

id (int) : Identifiant unique du module
name (string) : Nom du module
description (string) : Description du module
user_id (int) : Référence à l'utilisateur créateur du module (clé étrangère)


Sécurité avec JWT (JSON Web Token)
Généralité de la Sécurité
L'authentification et l'autorisation dans cette application sont gérées via JWT (JSON Web Token). Lorsqu'un utilisateur se connecte, un token JWT est généré par l'API et renvoyé au client. Ce token contient les informations d'authentification de l'utilisateur et doit être inclus dans chaque requête pour accéder aux ressources protégées, telles que la liste des modules de cours.

Fonctionnement du JWT :
Authentification :

L'utilisateur soumet ses identifiants (email et mot de passe) via un formulaire de connexion.
Si l'authentification réussit, le serveur génère un token JWT signé avec une clé secrète.

Protection des routes :

Chaque requête envoyée aux routes protégées de l'API (comme la récupération des modules de cours) doit inclure le token JWT dans les headers de la requête (Authorization: Bearer {token}).
Le serveur vérifie la validité du token avant de répondre à la requête.
Expiration :

Le token JWT a une durée de vie limitée. Si le token expire, l'utilisateur devra se reconnecter pour obtenir un nouveau token.

Features
Page de Connexion : Un utilisateur peut se connecter via un formulaire en fournissant son email et son mot de passe.
Affichage des Modules de Cours : Après authentification, l'utilisateur peut accéder à une liste de modules de cours.
JWT Authentification : Les routes protégées nécessitent un token JWT valide pour être accessibles.
Mise en page responsive : L'application est entièrement responsive grâce à Tailwind CSS.
Récupération des Modules : L'utilisateur peut accéder aux détails des cours disponibles dans la base de données après s'être authentifié.
Page des cours
Après connexion, l'utilisateur est redirigé vers une page qui affiche une liste de cours avec leurs noms et descriptions.

Pages des cours et connexion
Vous avez mentionné deux pages principales : une page de connexion (LoginPage) et une page d'affichage des cours après connexion (CoursesPage). Le code que vous avez fourni pour ces deux pages correspond à cette structure :
LoginPage : vous avez implémenté un formulaire avec des champs pour l'email et le mot de passe, qui envoie une requête à l'API pour authentifier l'utilisateur et stocker le token JWT.
CoursesPage : la récupération des cours via l'API après authentification est correcte, avec le token JWT envoyé dans les en-têtes pour sécuriser l'accès.

Installation
Prérequis
Avant de commencer, assurez-vous d'avoir installé les logiciels suivants :

Node.js (version 14 ou supérieure)
npm (version 6 ou supérieure)


Étapes d'installation

Installer les dépendances :
npm install
Configurer l'API :

S'assurer que l'API est configurée pour gérer l'authentification JWT et que les endpoints auth/login et courses sont disponibles.

Configuration des variables d'environnement :

bash
Copier le code
npm start
L'application sera disponible à l'adresse : http://localhost:3000.

Authentification avec JWT
Lors de la connexion, l'API retourne un token JWT qui est stocké dans le navigateur (localStorage).
Ce token est ensuite envoyé dans le header Authorization de chaque requête aux endpoints protégés, sous la forme Bearer {token}


Intégrations des Wireframes
Les wireframes seront intégrés dans l'application en deux pages principales :

LoginPage : pour la connexion
CoursesPage : pour l'affichage des cours après connexion.
Récupération des données
Après la connexion réussie, les données des cours sont récupérées via une requête GET à l'API /courses protégée par le JWT.
Si le token est invalide ou expiré, l'utilisateur est redirigé vers la page de connexion.
Pages des cours et connexion.

une page de connexion (LoginPage) et une page d'affichage des cours après connexion (CoursesPage). Le code que vous avez fourni pour ces deux pages correspond à cette structure :

LoginPage : vous avez implémenté un formulaire avec des champs pour l'email et le mot de passe, qui envoie une requête à l'API pour authentifier l'utilisateur et stocker le token JWT.

CoursesPage : la récupération des cours via l'API après authentification est correcte, avec le token JWT envoyé dans les en-têtes pour sécuriser l'accès.


Récupération des Données
L'application récupère les données des modules de cours après que l'utilisateur se soit authentifié avec succès. Une requête est envoyée à l'API avec le token JWT dans l'en-tête pour garantir que l'utilisateur est autorisé à voir les modules.

Étapes de Récupération des Données
Connexion de l'utilisateur :

L'utilisateur entre ses identifiants sur la page de connexion.
Si l'authentification réussit, le token JWT est stocké localement.

Requête d'API pour récupérer les modules :
Une fois connecté, l'utilisateur est redirigé vers la page des cours.
Une requête GET est envoyée à l'API pour récupérer les modules, avec le token JWT inclus dans les en-têtes.
Affichage des données :

Les données reçues de l'API (nom et description des modules) sont affichées dans une liste sur la page.
