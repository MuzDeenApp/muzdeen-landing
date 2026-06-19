<div align="center">

# Muz'Deen — Landing Page

**Pour ici et l'au-delà.**

La plateforme qui digitalise les dons des organisations musulmanes — mosquées, associations de cours de Coran, associations musulmanes, humanitaires et culturelles. Donner en quelques secondes, gérer mieux, rendre des comptes en toute transparence.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## 📱 Aperçu de l'application

### Côté donateur

<table>
  <tr>
    <td align="center"><img src="public/app-screens/home.jpg" width="200" alt="Accueil" /><br/><sub><b>Accueil</b></sub></td>
    <td align="center"><img src="public/app-screens/mosque.jpg" width="200" alt="Fiche mosquée" /><br/><sub><b>Fiche mosquée</b></sub></td>
    <td align="center"><img src="public/app-screens/don.jpg" width="200" alt="Don" /><br/><sub><b>Don</b></sub></td>
  </tr>
  <tr>
    <td align="center"><img src="public/app-screens/horaire.jpg" width="200" alt="Horaires de prière" /><br/><sub><b>Horaires</b></sub></td>
    <td align="center"><img src="public/app-screens/qibla.jpg" width="200" alt="Qibla" /><br/><sub><b>Qibla</b></sub></td>
    <td align="center"><img src="public/app-screens/duaa.jpg" width="200" alt="Duaa" /><br/><sub><b>Duaa</b></sub></td>
  </tr>
</table>

### Espace manager (organisations)

<table>
  <tr>
    <td align="center"><img src="public/app-screens/manager_accueil.jpg" width="200" alt="Tableau de bord" /><br/><sub><b>Tableau de bord</b></sub></td>
    <td align="center"><img src="public/app-screens/manager_projet.jpg" width="200" alt="Projets" /><br/><sub><b>Projets</b></sub></td>
    <td align="center"><img src="public/app-screens/manager_qrcode.jpg" width="200" alt="QR codes" /><br/><sub><b>QR codes</b></sub></td>
    <td align="center"><img src="public/app-screens/manager_affiche.jpg" width="200" alt="Affiche" /><br/><sub><b>Affiches</b></sub></td>
  </tr>
</table>

---

## ✨ Ce que contient la landing

| Section | Description |
| --- | --- |
| **Hero** | Slogan animé, carrousel d'écrans réels, double CTA donateur / organisation. |
| **Le problème** | Comparatif animé « avant / avec Muz'Deen ». |
| **Comment ça marche** | Parcours de bout en bout en 6 étapes, timeline animée au scroll. |
| **Pour qui** | Les 5 types d'organisations couvertes (cartes 3D tilt). |
| **Confiance & sécurité** | Schéma animé du flux d'argent (donateur → Stripe → organisation). |
| **Modèle économique** | Répartition d'un don de 10 € avec compteur animé. |
| **Pour les organisations** | Bénéfices B2B + carrousel des écrans manager. |
| **Ramadan** | Section dédiée, ambiance nocturne. |
| **Témoignages** | Emplacements réservés (aucun faux avis). |
| **FAQ** | Accordéon fluide. |
| **Téléchargement** | Badges App Store / Google Play + QR code. |

---

## 🧱 Stack

- **Next.js 15** (App Router)
- **TypeScript** strict — pas de `any`
- **Tailwind CSS 4**
- **Framer Motion 12** — animations au scroll, parallax, carrousels
- **lucide-react** — icônes
- Mode **clair + sombre**, `prefers-reduced-motion` respecté
- Déploiement : **Vercel**

---

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # serveur de développement
npm run build    # build de production
npm run start    # serveur de production
npm run lint     # ESLint
```

---

## 📂 Structure

```text
app/                  # routes (accueil, /privacy, /terms, /demo, /contact)
components/
  sections/           # sections de la page (hero, faq, pricing, ramadan…)
  ui/                 # primitives (button, logo, motion, section-header)
  *.tsx               # carrousels d'écrans, formulaire de démo
lib/
  content.ts          # source de contenu centralisée (textes, données)
public/
  app-screens/        # captures réelles de l'application
  assets/             # QR code de téléchargement
  appstore.png        # badges stores
  googleplay.png
```

> Tout le contenu textuel vit dans [`lib/content.ts`](lib/content.ts) — pas de texte codé en dur dans les composants.

---

## 📨 Formulaire de démo

Le formulaire affiche un état de succès côté client. Aucun backend n'est encore branché.

Intégrations futures possibles : route API Next.js, Resend, CRM, notification email interne.

---

## ▲ Déploiement Vercel

1. Importer le repo dans Vercel.
2. Réglages par défaut :
   - Framework Preset : **Next.js**
   - Build Command : `npm run build`
   - Output Directory : `.next`
3. La branche `main` déploie en **production** ; les autres branches génèrent une **preview** automatique.

---

## ⚖️ Légal

Pages `/privacy` (politique de confidentialité) et `/terms` (mentions légales) basées sur les modèles légaux du projet — **à faire relire par un professionnel du droit avant mise en production**.

<div align="center"><sub>© Muz'Deen — Pour ici et l'au-delà.</sub></div>
