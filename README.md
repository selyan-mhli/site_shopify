# Shopify Camera Pro Theme

Thème Shopify custom avec architecture **Vite + Tailwind CSS + TypeScript + GSAP**.

Design technique, dense et premium inspiré de [hd-protech.com](https://www.hd-protech.com/).

## 🏗️ Architecture

```
├── src/                    # Code source TypeScript
│   ├── components/         # Custom Elements (Hero, FeaturesGrid...)
│   ├── styles/             # CSS avec Tailwind
│   └── main.ts             # Point d'entrée
├── assets/                 # Fichiers compilés (main.js, theme.css)
├── layout/                 # theme.liquid
├── sections/               # Sections Shopify
├── snippets/               # Snippets réutilisables
├── templates/              # Templates de pages
├── config/                 # Settings Shopify
└── locales/                # Traductions
```

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Build pour production
npm run build

# Mode watch (développement)
npm run watch
```

## 📦 Workflow de déploiement

### 1. Lier ton repo GitHub à Shopify

1. Va dans **Shopify Admin** → **Online Store** → **Themes**
2. Clique sur **Add theme** → **Connect from GitHub**
3. Autorise l'accès et sélectionne ton repository
4. Shopify créera automatiquement une branche `main` liée

### 2. Avant chaque push

```bash
# 1. Build les assets
npm run build

# 2. Vérifier que les fichiers sont générés
ls -la assets/
# Tu dois voir: main.js et theme.css

# 3. Commit et push
git add .
git commit -m "feat: update theme"
git push origin main
```

### 3. Déploiement automatique

Shopify détecte automatiquement les changements sur la branche liée et met à jour le thème.

## 🎨 Personnalisation

### Ajouter un nouveau composant

1. Créer le fichier dans `src/components/MonComposant.ts`
2. Utiliser la syntaxe Custom Element :

```typescript
import gsap from 'gsap';

export class MonComposant extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initAnimations();
  }

  private render() {
    this.innerHTML = `<div class="mon-composant">...</div>`;
  }

  private initAnimations() {
    gsap.from(this, { opacity: 0, y: 20, duration: 0.8 });
  }
}

customElements.define('mon-composant', MonComposant);
```

3. Importer dans `src/main.ts` :

```typescript
import './components/MonComposant';
```

4. Utiliser dans un fichier `.liquid` :

```liquid
<mon-composant></mon-composant>
```

5. Rebuild : `npm run build`

### Modifier les couleurs

Éditer `tailwind.config.js` pour personnaliser la palette :

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Couleur principale
    // ...
  }
}
```

## 🔧 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Build production vers `/assets` |
| `npm run watch` | Build en mode watch |

## 📁 Fichiers générés

Après `npm run build`, ces fichiers sont créés dans `/assets` :

- `main.js` - JavaScript bundlé (GSAP + composants)
- `theme.css` - CSS compilé (Tailwind)

Ces fichiers sont importés dans `layout/theme.liquid` :

```liquid
{{ 'theme.css' | asset_url | stylesheet_tag }}
<script src="{{ 'main.js' | asset_url }}" type="module" defer></script>
```

## ⚡ Technologies

- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Typage statique
- **GSAP** - Animations professionnelles
- **Custom Elements** - Web Components natifs

## 📝 Notes importantes

1. **Toujours builder avant de push** - Les fichiers dans `/assets` doivent être à jour
2. **Pas de hash dans les noms** - Vite est configuré pour générer `main.js` et `theme.css` (pas de hash)
3. **Tailwind scanne les .liquid** - Les classes utilisées dans les fichiers Liquid sont incluses dans le CSS

## 🐛 Troubleshooting

### Les styles ne s'appliquent pas

```bash
# Rebuild le CSS
npm run build
# Vérifier que theme.css contient les classes
```

### Les animations ne fonctionnent pas

Vérifier que le composant est bien importé dans `main.ts` et que le Custom Element est défini.

### Erreur "Cannot find module"

```bash
# Réinstaller les dépendances
rm -rf node_modules
npm install
```
