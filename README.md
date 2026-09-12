# Noureddine Naybet — site officiel

Vitrine React + Vite qui reprend le design et la grille des sites Christian
Karembeu et Claude Makélélé : fond clair éditorial, typographie d'affiche,
accent or, et **une grille plein écran par rubrique** — portrait, panneau de
texte décalé de 2 rem, photo avec citation, colonnes de vignettes, 6 px de
gouttière. Bascule en grille compacte à 1080 px puis en colonne unique à
480 px, comme les sites de référence.

## Démarrer

```bash
npm install
npm run dev        # serveur de développement
npm run build      # export statique dans dist/
npm run preview    # prévisualise dist/
npm run images     # régénère public/imgs/ depuis les photos du client

# contrôle de responsivité : lance Edge en headless et mesure chaque page
# à 15 tailles d'écran (débordement horizontal, texte coupé, cibles tactiles).
# Le serveur de dev doit tourner.
npm run check:responsive
```

Dernier passage : aucun débordement ni texte coupé de 320 px à 1920 px, menu
burger compris (320, 360, 390, 430, 480, 540, 600, 768, 834, 1024, 1080, 1280,
1440, 1920 et 812x375 en paysage).

## Rubriques

| Rubrique      | URL                | Contenu                                                        |
| ------------- | ------------------ | -------------------------------------------------------------- |
| La Légende    | `/`                | Nomination d'ambassadeur du Mondial 2030, valeurs, mosaïque     |
| Palmarès      | `/palmares`        | Carrière, record de 115 sélections, citation Scaloni, 6 équipes |
| Sponsoring    | `/sponsoring`      | Argumentaire 2030, 4 leviers de ROI, secteurs cibles            |
| Partenariats  | `/partenariats`    | TotalEnergies + les 3 formats de contrats                       |
| Boutique      | `/boutique`        | En construction (page `noindex`)                                |
| Contact       | `/contact`         | Même concept que Karembeu : fiche NATIS + formulaire EmailJS     |
| Mentions      | `/mentions-legales`| Mentions légales (page `noindex`)                               |

## Images

Les photos brutes envoyées par le client restent dans les dossiers
`la legende/`, `palmares images/`, `partenariats images/`,
`sponsoring images/`. `scripts/prepare-images.mjs` les recadre et les exporte
vers `public/imgs/` : bandes noires et interface Android retirées de la capture
d'écran, bandeaux de filigrane retirés en pied des photos d'agence.

Pour ajouter ou remplacer une photo : déposer le fichier, ajouter son entrée
dans `SRC` puis dans `JOBS`, et relancer `npm run images`.

## À compléter avant la mise en ligne

1. **Clés EmailJS** — copier `.env.example` vers `.env` et renseigner les trois
   variables, sinon le formulaire de contact échoue.
2. **Trois photos sous filigrane Alamy** — `palmares/tottenham-action.jpeg`
   (2e portrait de la page Palmarès), `palmares/deportivo-champions-league.jpeg`
   (vignette de la même page) et `palmares/deportivo-action.jpeg` (non utilisée,
   conservée au cas où) portent le filigrane en diagonale. Ce sont les seules
   photos verticales du lot, d'où leur place dans la grille : à licencier ou à
   remplacer par des verticales équivalentes.
3. **Hébergeur** — à renseigner dans la section 2 de `src/pages/MentionsLegales.jsx`.
4. **Domaine** — une seule constante à changer : `SITE_URL` dans `src/config.js`
   (à répercuter aussi dans `index.html`, `public/robots.txt` et
   `public/sitemap.xml`).
5. **Réseaux sociaux** — aucun compte officiel n'a été fourni, la barre de liens
   sociaux des autres sites n'a donc pas été reprise.

## Hébergement

Export statique classique : `npm run build` puis dépôt de `dist/`.
`public/.htaccess` (Apache/cPanel) et `public/_redirects` (Netlify) renvoient
déjà toutes les URL vers `index.html`, nécessaire pour le routage React Router.
