# 🎬 Cinetech

Bienvenue dans **Cinetech**, une application web de bibliothèque de films et séries utilisant l’API publique [The Movie Database (TMDB)](https://www.themoviedb.org/).

## 📌 Objectif

L'objectif de ce projet est de permettre aux utilisateurs de :
- Parcourir un large catalogue de films et séries.
- Consulter les détails de chaque œuvre.
- Gérer une liste de favoris (stockée en local).
- Lire et laisser des commentaires.
- Rechercher des films ou séries grâce à une barre de recherche avec autocomplétion.

---

## 🚀 Fonctionnalités

- **Page d’accueil** avec une sélection de films et séries.
- **Pages dédiées** :
  - Tous les films (avec pagination)
  - Toutes les séries (avec pagination)
  - Détail d’un film ou d’une série (infos complètes + suggestions similaires)
- **Ajout aux favoris** (stocké en `localStorage`)
- **Système de commentaires** : affichage, ajout, réponses (stockés en local)
- **Recherche intelligente** avec autocomplétion asynchrone
- **Design responsive**, adapté aux écrans desktop et mobiles

---

## 🛠️ Technologies utilisées

- HTML5 / CSS3 / JavaScript
- [TMDB API](https://developers.themoviedb.org/3)
- LocalStorage
- Responsive Web Design

---

📌 Remarques importantes

Aucune authentification requise.

Les favoris et commentaires sont stockés localement (dans localStorage).

Les données ne sont pas envoyées à TMDB.

L'API TMDB ne fournit pas les vidéos mais uniquement les informations.

---

