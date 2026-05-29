# Muz'Deen Landing

Landing page officielle de Muz'Deen, separee de l'application mobile.

Muz'Deen est une plateforme en cours de developpement pour moderniser les dons aux mosquees via QR code, NFC et mobile, avec une experience rapide, fiable et sans compte obligatoire.

## Stack

- Next.js
- TypeScript strict
- Tailwind CSS
- Framer Motion
- Lucide React
- Deploiement cible : Vercel

## Lancement local

```bash
npm install
npm run dev
```

Puis ouvrir :

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Structure

```text
app/
components/
components/sections/
components/ui/
lib/
public/
```

## Formulaire de demo

Le formulaire affiche un etat de succes cote client. Aucun backend n'est branche pour le moment.

Integration future possible :

- API route Next.js
- Resend
- CRM
- notification email interne

## Deploiement Vercel

1. Creer un repo GitHub `muzdeen-landing`.
2. Pousser ce projet sur GitHub.
3. Importer le repo dans Vercel.
4. Garder les reglages par defaut :
   - Framework Preset : Next.js
   - Install Command : `npm install`
   - Build Command : `npm run build`
   - Output Directory : `.next`
5. Ajouter les variables d'environnement futures si une API de contact ou Resend est branchee.
6. Lancer le premier deploy.

## Notes produit

La page evite les fausses promesses : les paiements Stripe, le dashboard mosquee, les campagnes et les analytics sont presentes comme prevus ou en cours de developpement selon leur etat.
