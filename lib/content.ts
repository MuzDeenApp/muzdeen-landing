import {
  BadgeCheck,
  BarChart3,
  Building2,
  Clock3,
  CreditCard,
  FileCheck2,
  HandHeart,
  LockKeyhole,
  Megaphone,
  MousePointerClick,
  Nfc,
  QrCode,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Solution", href: "#solution" },
  { label: "Mosquees", href: "#mosquees" },
  { label: "Produit", href: "#produit" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export const problemPoints = [
  "Les dons en espece diminuent alors que les besoins des mosquees restent constants.",
  "Les dons spontanes sont souvent perdus quand un fidele n'a pas de cash sur lui.",
  "Les mosquees manquent d'outils simples pour rendre le don accessible partout.",
  "La confiance exige une experience claire, rapide et professionnelle.",
];

export const solutionSteps = [
  {
    icon: QrCode,
    title: "QR code visible",
    text: "Sur la porte, une affiche, un comptoir ou un support de campagne.",
  },
  {
    icon: Nfc,
    title: "Badge NFC",
    text: "Un geste naturel pour ouvrir la page de don depuis un smartphone compatible.",
  },
  {
    icon: HandHeart,
    title: "Don express",
    text: "Montant clair, paiement rapide, confirmation immediate et recu prevu.",
  },
  {
    icon: BadgeCheck,
    title: "Compte facultatif",
    text: "Le fidele peut donner sans friction, puis creer un compte s'il veut un historique.",
  },
];

export const howItWorks = [
  "La mosquee recoit son QR code ou son badge NFC.",
  "Le fidele scanne depuis son telephone.",
  "Il choisit un montant ou une campagne.",
  "Il donne en quelques secondes.",
];

export const mosqueBenefits = [
  "Recevoir plus de dons au bon moment",
  "Reduire la dependance au cash",
  "Suivre les dons et les campagnes",
  "Recevoir des rapports exploitables",
  "Rassurer les fideles avec une experience claire",
  "Preparer une collecte moderne et mesurable",
];

export const donorBenefits = [
  "Faire des dons selon ses besoins",
  "Garder le montant de son don confidentiel",
];

export const features = [
  { icon: QrCode, title: "QR code dynamique", text: "Un point d'entree simple pour chaque mosquee ou campagne." },
  { icon: Nfc, title: "NFC ready", text: "Prevu pour badges, plaques et supports physiques." },
  { icon: MousePointerClick, title: "Dons sans compte", text: "L'experience reste rapide pour maximiser les dons spontanes." },
  { icon: CreditCard, title: "Apple Pay / Google Pay ready", text: "Pensé pour les paiements mobiles modernes via Stripe a terme." },
  { icon: BarChart3, title: "Dashboard mosquee", text: "Suivi des dons, tendances et rapports dans la roadmap." },
  { icon: Megaphone, title: "Campagnes", text: "Collectes ciblees pour travaux, Ramadan, Zakat ou projets locaux." },
  { icon: ReceiptText, title: "Recus", text: "Confirmation claire apres le don, avec evolutions administratives prevues." },
  { icon: ShieldCheck, title: "Securite", text: "Architecture pensee pour proteger les flux et limiter l'exposition des donnees." },
  { icon: Building2, title: "Analytics", text: "Indicateurs utiles pour comprendre les collectes sans complexite inutile." },
  { icon: Clock3, title: "Fonctions islamiques", text: "Horaires de priere, Qibla, Tasbih, Istighfar et Duaas dans l'app." },
];

export const productScreens = [
  { title: "Accueil", eyebrow: "App mobile", stat: "For Here and Beyond", icon: Sparkles },
  { title: "Mosquees", eyebrow: "Decouverte", stat: "Autour de vous", icon: Building2 },
  { title: "Fiche mosquee", eyebrow: "Confiance", stat: "Infos & campagnes", icon: BadgeCheck },
  { title: "Don", eyebrow: "Paiement", stat: "10 EUR - 25 EUR - 50 EUR", icon: HandHeart },
  { title: "Merci", eyebrow: "Confirmation", stat: "Don enregistre", icon: FileCheck2 },
  { title: "Qibla & horaires", eyebrow: "Spiritualite", stat: "Services utiles", icon: Smartphone },
];

export const roadmap = [
  {
    phase: "MVP",
    title: "Fondations produit",
    text: "Dons simules, mosquees, fiches detaillees et application mobile.",
  },
  {
    phase: "V1",
    title: "Don terrain",
    text: "QR code, NFC, integration Stripe en test puis production selon validation.",
  },
  {
    phase: "V2",
    title: "Pilotage mosquee",
    text: "Dashboard, campagnes, analytics, rapports et outils de suivi.",
  },
  {
    phase: "Futur",
    title: "Reseau communautaire",
    text: "Reseau de mosquees, outils communautaires et services islamiques enrichis.",
  },
];

export const faqs = [
  {
    question: "Est-ce que le don necessite un compte ?",
    answer: "Non. La vision de Muz'Deen est de permettre un don en quelques secondes sans compte obligatoire. Le compte devient utile ensuite pour l'historique et les services avances.",
  },
  {
    question: "Comment fonctionne le QR code ?",
    answer: "La mosquee affiche un QR code qui ouvre sa page de don. Le fidele choisit un montant, verifie les informations et finalise son don depuis son telephone.",
  },
  {
    question: "Est-ce securise ?",
    answer: "La securite est pensee des la conception. Les paiements via Stripe sont prevus, et aucune donnee sensible de carte n'a vocation a etre stockee par Muz'Deen.",
  },
  {
    question: "Les mosquees peuvent-elles suivre les dons ?",
    answer: "Oui, c'est prevu dans la roadmap avec un dashboard mosquee, des rapports et des vues par campagne.",
  },
  {
    question: "Est-ce disponible aujourd'hui ?",
    answer: "Muz'Deen est en cours de developpement. Le MVP permet de presenter l'experience et de preparer les mosquees pilotes avant la mise en production des paiements.",
  },
  {
    question: "Comment une mosquee peut-elle rejoindre Muz'Deen ?",
    answer: "Elle peut demander une demo pour echanger sur ses besoins, tester le parcours et rejoindre une phase pilote quand elle sera ouverte.",
  },
];

export const trustItems = [
  { icon: LockKeyhole, title: "Paiements prepares avec Stripe", text: "Stripe est l'option prevue pour les flux de paiement, a valider en test puis production." },
  { icon: ShieldCheck, title: "Donnees sensibles limitees", text: "L'architecture vise a ne pas exposer inutilement les informations sensibles." },
  { icon: BadgeCheck, title: "Transparence des dons", text: "Chaque parcours doit rester comprehensible pour la mosquee comme pour le donateur." },
];
