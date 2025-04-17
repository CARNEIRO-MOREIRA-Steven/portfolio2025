import { Projet } from '../types/Projets';
export const projetsData: Projet[] = [
    {
      id: 1,
      title: 'AURA',
      shortDescription: 'Site sur mesure pour des contrats d’entretiens',
      fullDescription: 'Création d’un site sur-mesure en React / TypeScript pour la gestion de contrats d’entretien. Intégration de la signature électronique avec YouSign et paiement en ligne avec Stripe. Responsive, SEO optimisé.',
      technologies: ['React', 'TypeScript', 'CSS', 'Bootstrap', 'Stripe API', 'YouSign API' ],
      image: './aura_projet.png', // Placeholder image URL
    },
    {
      id: 2,
      title: 'L’espace d’un Instant',
      shortDescription: 'Site de réservation pour une maison d’hôte',
      fullDescription: 'Création d’un site pour une maison d’hôte avec gestion des réservations en ligne. Responsive, SEO optimisé.',
      technologies: ['Wordpress', 'WooCommerce', 'Php', 'CSS', 'MySQL', 'Plugin', 'PayPal'],
      image: './lespaced1instant_projet.png', // Placeholder image URL
    },
    {
      id: 3,
      title: 'Neuf Mois Demain',
      shortDescription: 'Site de location de matériel de puériculture',
      fullDescription: "Création d’un site e-commerce pour accompagner les futures mamans avec système de location. Mise en place d'une caution en ligne. Responsive, SEO optimisé.",
      technologies: ['Wordpress', 'WooCommerce', 'CSS', 'Php', 'MySQL', 'Plugin', 'Stripe'],
      image: './neufmoisdemain_projet.png', // Placeholder image URL
    },
    {
      id: 4,
      title: 'A’DECOR',
      shortDescription: 'Site vitrine pour un artisan peintre',
      fullDescription: 'Création d’un site vitrine en Next.js pour un artisan peintre. Responsive, SEO optimisé, et hébergé sur Vercel. Récupération des avis Google.',
      technologies: ['Next.js', 'HTML', 'CSS','GitHub', 'Vercel'],
      image: './adecor_projet.png', // Placeholder image URL
    },
    {
      id: 5,
      title: 'Greenz Ink Tattoo',
      shortDescription: 'Site vitrine pour tattoueuse',
      fullDescription: "Réalisation d'un site internet pour une tatoueuse. Responsive, SEO optimisé.",
      technologies: ['Next.js', 'JavaScript', 'CSS','GitHub', 'Vercel'],
      image: './greenzinktattoo_projet.png', // Placeholder image URL
    },
    {
      id: 6,
      title: 'Scij Mode',
      shortDescription: 'Debug d’un site e-commerce',
      fullDescription: 'Refonte du processus de commande. Correction des articles personnalisables. Ajustement des options de livraison',
      technologies: ['Wordpress', 'WooCommerce', 'CSS', 'Php', 'MySQL', 'Plugin'],
      image: './scijmode_projet.png', // Placeholder image URL
    },
  ];