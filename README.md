# SAHEL BTP — Gestion des matériaux

Application de gestion des matériaux BTP, en **HTML / CSS / JavaScript pur**
(aucun framework, aucune étape de build). Fonctionne directement dans un
navigateur, hébergeable sur GitHub Pages en glissant simplement les fichiers.

## Fichiers du projet

```
index.html            page principale (structure)
style.css              tous les styles
app.js                 toute la logique de l'application
config.js               vos identifiants Supabase (à remplir)
supabase-schema.sql     script SQL à exécuter dans Supabase
```

## Mode de fonctionnement : LOCAL par défaut, DYNAMIQUE une fois connecté

**Aucune donnée fictive n'est incluse.** Au tout premier lancement, l'application
est entièrement vide et vous demande de créer votre propre compte administrateur
(nom, e-mail, mot de passe de votre choix). Ce compte a tous les droits. Vous
créez ensuite vous-même vos matériaux, dépôts, fournisseurs, chantiers,
utilisateurs, etc. — rien n'est pré-rempli.

**Tel quel (sans configurer Supabase)**, les données restent stockées dans le
navigateur (localStorage) — elles ne sont pas partagées entre appareils ou
utilisateurs.

**Pour rendre l'application réellement dynamique** (données partagées en
temps réel entre tous les utilisateurs et appareils, comme une vraie
application professionnelle), il faut la connecter à une base de données
Supabase gratuite. Une fois connectée, un badge **"En ligne"** apparaît en
haut de l'application, et toutes les créations/modifications sont
automatiquement envoyées à la base partagée, avec une resynchronisation
automatique toutes les 20 secondes pour récupérer les changements faits par
d'autres.

### Étapes de connexion (10 minutes, une seule fois)

1. Créez un compte gratuit sur **supabase.com** et créez un nouveau projet.
2. Dans le projet, allez dans **SQL Editor → New query**, collez tout le
   contenu du fichier `supabase-schema.sql` fourni ici, puis cliquez **Run**.
   Cela crée toutes les tables nécessaires.
3. Allez dans **Project Settings → API**. Copiez :
   - **Project URL**
   - la clé **anon public**
4. Ouvrez `config.js` et collez ces deux valeurs :
   ```js
   const CONFIG = {
     SUPABASE_URL: "https://xxxxxxxx.supabase.co",
     SUPABASE_ANON_KEY: "eyJhbGciOi...",
   };
   ```
5. Ouvrez (ou republiez) `index.html` — l'application se connecte
   automatiquement. Le premier écran vous invite à créer votre compte
   administrateur, qui sera alors enregistré directement dans Supabase.

### ⚠️ Note de sécurité importante

Cette application utilise la clé publique Supabase directement dans le
navigateur, avec des règles d'accès ouvertes (voir `supabase-schema.sql`).
Cela veut dire que **toute personne connaissant votre URL et votre clé
pourrait techniquement lire ou modifier les données** en contournant
l'interface. C'est un compromis raisonnable pour un usage interne à l'équipe
Sahel BTP, mais **ne convient pas à une mise en production grand public**
sans ajouter une vraie authentification (Supabase Auth) et des règles de
sécurité par utilisateur — une évolution possible plus tard.

## Comptes

Il n'existe aucun compte préconfiguré. Le premier écran vous invite à créer
votre propre compte administrateur. Vous pourrez ensuite créer d'autres
comptes (responsable magasin, responsable chantier, comptable...) depuis la
page **Utilisateurs**, avec les vrais membres de votre équipe.

## Déploiement sur GitHub Pages

1. Mettez les 4 fichiers (`index.html`, `style.css`, `app.js`, `config.js`) —
   et `supabase-schema.sql` si vous voulez le garder dans le dépôt — à la
   racine de votre dépôt GitHub.
2. Allez dans **Settings → Pages** du dépôt.
3. Source : branche `main`, dossier `/ (root)`.
4. Enregistrez. En 1-2 minutes, le site est en ligne sur
   `votre-identifiant.github.io/nom-du-depot`.

Aucune compilation, aucun `npm install` nécessaire.

## Fonctionnalités incluses (Phase 1 du cahier des charges)

- Authentification par rôles avec permissions granulaires
- Tableau de bord (KPIs incluant Achats du mois, alertes de stock, 3 graphiques : évolution du stock, entrées/sorties/ajustements, consommation par chantier)
- Matériaux (fiche complète, QR Code téléchargeable)
- Catégories, Dépôts/magasins, Fournisseurs
- Entrées, Sorties, Transferts de stock (mise à jour automatique des quantités)
- Inventaire (théorique vs physique, écarts)
- Chantiers : Liste, Besoins, Affectations, Consommations, Coûts (pages dédiées)
- Demandes de matériaux avec workflow de validation
- Demandes d'achat, bons de commande, réceptions de marchandises, factures fournisseurs
- **Ventes : Clients, Devis, Commandes, Factures** — devis brouillon → envoyé → accepté, conversion en commande, livraison (sortie de stock automatique), facturation et suivi des paiements
- Rapports exportables en CSV
- Notifications automatiques (stock faible, rupture)
- Journal d'activité (traçabilité complète)
- Gestion des utilisateurs et matrice des permissions

## Prochaines évolutions possibles

- Authentification Supabase native (comptes réels, sécurité renforcée)
- Ventes et facturation client
- Notifications WhatsApp / SMS
- Application mobile
