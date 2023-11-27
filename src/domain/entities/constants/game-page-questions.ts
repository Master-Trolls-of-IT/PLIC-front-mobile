import { GameQuestion } from '~/domain/interfaces/props/game/game-question';

export const gamePageQuestions: GameQuestion[] = [
    {
        question: "Quelle est la principale source de la pollution de l'air dans les zones urbaines?",
        answer: [
            { content: 'Émissions industrielles', isGoodAnswer: false },
            { content: 'Émissions de véhicules à moteur', isGoodAnswer: true },
            { content: 'Déchets plastiques', isGoodAnswer: false },
            { content: "Utilisation excessive d'énergie", isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que la biodiversité?",
        answer: [
            { content: "La variété d'espèces vivantes dans un écosystème", isGoodAnswer: true },
            { content: 'La quantité totale de végétation dans un endroit donné', isGoodAnswer: false },
            { content: "Le nombre total d'individus d'une espèce donnée", isGoodAnswer: false },
            { content: "L'équilibre entre les ressources naturelles", isGoodAnswer: false }
        ]
    },
    {
        question: "Quel est le principal gaz responsable de l'effet de serre?",
        answer: [
            { content: 'Oxygène (O2)', isGoodAnswer: false },
            { content: 'Dioxyde de carbone (CO2)', isGoodAnswer: true },
            { content: 'Azote (N2)', isGoodAnswer: false },
            { content: 'Méthane (CH4)', isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que le recyclage vise à accomplir?",
        answer: [
            { content: "Réduire la consommation d'eau", isGoodAnswer: false },
            { content: 'Réduire la quantité de déchets envoyée en décharge', isGoodAnswer: true },
            { content: 'Augmenter la production de nouveaux matériaux', isGoodAnswer: false },
            { content: 'Accélérer la décomposition des déchets', isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que l'empreinte écologique d'une personne?",
        answer: [
            { content: 'La taille de son empreinte digitale', isGoodAnswer: false },
            { content: "La quantité d'eau qu'elle consomme", isGoodAnswer: false },
            { content: "L'impact total de sa consommation sur l'environnement", isGoodAnswer: true },
            { content: "Le nombre d'arbres qu'elle plante chaque année", isGoodAnswer: false }
        ]
    },
    {
        question: 'Quelle est la principale cause de la déforestation?',
        answer: [
            { content: "L'exploitation minière", isGoodAnswer: false },
            { content: 'Les incendies naturels', isGoodAnswer: false },
            { content: "L'agriculture et l'élevage intensifs", isGoodAnswer: true },
            { content: 'Les activités de randonnée', isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que la surpêche?",
        answer: [
            { content: 'La pêche excessive entraînant une diminution des stocks de poissons', isGoodAnswer: true },
            { content: 'La pêche pratiquée pendant la saison de reproduction des poissons', isGoodAnswer: false },
            { content: "La pêche à des profondeurs extrêmes de l'océan", isGoodAnswer: false },
            { content: 'La pêche à des espèces non comestibles', isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que la permaculture?",
        answer: [
            { content: 'Une technique de pêche durable', isGoodAnswer: false },
            { content: "Un système d'agriculture durable basé sur des écosystèmes naturels", isGoodAnswer: true },
            { content: 'Une méthode de recyclage des déchets organiques', isGoodAnswer: false },
            { content: 'Une approche de construction écologique', isGoodAnswer: false }
        ]
    },
    {
        question: "Quel est le rôle des abeilles dans l'écosystème?",
        answer: [
            { content: 'Détruire les cultures', isGoodAnswer: false },
            { content: 'Assurer la pollinisation des plantes', isGoodAnswer: true },
            { content: "Contrôler les populations d'insectes nuisibles", isGoodAnswer: false },
            { content: 'Fournir de la nourriture pour les oiseaux', isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que l'effet d'albédo?",
        answer: [
            { content: "La capacité d'un matériau à se décomposer", isGoodAnswer: false },
            { content: 'La réflexion de la lumière par une surface', isGoodAnswer: true },
            { content: "L'effet de serre inverse", isGoodAnswer: false },
            { content: "La dégradation des sols par l'activité humaine", isGoodAnswer: false }
        ]
    },
    {
        question: 'Quel est le principal problème lié à la pollution plastique dans les océans?',
        answer: [
            { content: 'La surpopulation de méduses', isGoodAnswer: false },
            { content: "L'empoisonnement des poissons par les déchets plastiques", isGoodAnswer: true },
            { content: "L'acidification des océans", isGoodAnswer: false },
            { content: 'La prolifération des algues toxiques', isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que l'agriculture biologique?",
        answer: [
            { content: "Une méthode d'agriculture utilisant des engrais chimiques", isGoodAnswer: false },
            { content: "Une approche d'agriculture sans utilisation de pesticides synthétiques", isGoodAnswer: true },
            { content: 'Une technique de culture en laboratoire', isGoodAnswer: false },
            { content: "Une méthode d'irrigation intensive", isGoodAnswer: false }
        ]
    },
    {
        question: "Quel est l'objectif de la certification LEED dans la construction?",
        answer: [
            { content: "Réduire la consommation d'électricité", isGoodAnswer: false },
            { content: 'Promouvoir la durabilité dans la construction', isGoodAnswer: true },
            { content: 'Maximiser la production de déchets de construction', isGoodAnswer: false },
            { content: "Améliorer l'esthétique des bâtiments", isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que l'effet de serre?",
        answer: [
            { content: "L'augmentation de la température de la Terre due à l'activité humaine", isGoodAnswer: true },
            { content: 'La diminution de la température de la Terre la nuit', isGoodAnswer: false },
            { content: "Le refroidissement rapide de l'atmosphère", isGoodAnswer: false },
            { content: "La réduction de la concentration d'oxygène dans l'atmosphère", isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que la désertification?",
        answer: [
            { content: "L'expansion des zones forestières", isGoodAnswer: false },
            { content: 'La conversion des terres arables en déserts', isGoodAnswer: true },
            { content: "L'augmentation de la biodiversité", isGoodAnswer: false },
            { content: 'La création artificielle de zones désertiques', isGoodAnswer: false }
        ]
    },
    {
        question: 'Quelle est la principale menace pour les récifs coralliens?',
        answer: [
            { content: 'La surpêche', isGoodAnswer: false },
            { content: 'Le changement climatique et le blanchiment des coraux', isGoodAnswer: true },
            { content: "L'exploitation minière sous-marine", isGoodAnswer: false },
            { content: "Les déversements d'hydrocarbures", isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que le commerce équitable?",
        answer: [
            { content: 'Un système commercial basé sur la concurrence acharnée', isGoodAnswer: false },
            {
                content: 'Un modèle commercial visant à garantir des conditions de travail équitables et durables',
                isGoodAnswer: true
            },
            { content: 'Un système de commerce réservé aux pays développés', isGoodAnswer: false },
            { content: 'Un modèle commercial favorisant les grandes entreprises', isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que la biomimétisme?",
        answer: [
            { content: "L'utilisation de combustibles fossiles", isGoodAnswer: false },
            { content: "L'imitation des modèles de la nature pour résoudre des problèmes humains", isGoodAnswer: true },
            { content: "L'utilisation de technologies obsolètes", isGoodAnswer: false },
            { content: "L'ignorance des écosystèmes naturels", isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que la régénération des sols?",
        answer: [
            { content: 'Le processus de dégradation des sols', isGoodAnswer: false },
            {
                content: "L'utilisation intensive de pesticides pour augmenter la productivité agricole",
                isGoodAnswer: false
            },
            {
                content: 'La restauration et la revitalisation des sols pour une agriculture durable',
                isGoodAnswer: true
            },
            { content: "L'utilisation de sols artificiels en agriculture", isGoodAnswer: false }
        ]
    },
    {
        question: "Qu'est-ce que l'agriculture intensive?",
        answer: [
            { content: "Une méthode agricole respectueuse de l'environnement", isGoodAnswer: false },
            {
                content: 'Une méthode agricole utilisant des techniques intensives pour maximiser la production',
                isGoodAnswer: true
            }
        ]
    },
    {
        question: "Quelle est la principale source d'énergie renouvelable?",
        answer: [
            { content: 'Le charbon', isGoodAnswer: false },
            { content: "L'énergie solaire", isGoodAnswer: true }
        ]
    },
    {
        question: "Qu'est-ce que la pollution lumineuse?",
        answer: [
            { content: "La présence d'éléments toxiques dans l'air", isGoodAnswer: false },
            {
                content: "L'émission excessive de lumière artificielle perturbant l'obscurité nocturne",
                isGoodAnswer: true
            }
        ]
    },
    {
        question: "Quel est l'effet de la déforestation sur le changement climatique?",
        answer: [
            { content: 'Aucun impact sur le changement climatique', isGoodAnswer: false },
            { content: "Contribue à l'augmentation des émissions de dioxyde de carbone", isGoodAnswer: true }
        ]
    },
    {
        question: 'Quelle est la principale cause de la perte de biodiversité?',
        answer: [
            { content: "L'amélioration des habitats naturels", isGoodAnswer: false },
            { content: "La destruction des habitats naturels par l'activité humaine", isGoodAnswer: true }
        ]
    },
    {
        question: 'Combien de saisons y a-t-il dans une année?',
        answer: [
            { content: 'Deux', isGoodAnswer: false },
            { content: 'Quatre', isGoodAnswer: true }
        ]
    },
    {
        question: "Quelle est la saison la plus chaude dans l'hémisphère nord?",
        answer: [
            { content: "L'été", isGoodAnswer: true },
            { content: 'Le printemps', isGoodAnswer: false }
        ]
    },
    {
        question: "Quelle est la caractéristique distinctive de l'automne?",
        answer: [
            { content: 'Les températures chaudes', isGoodAnswer: false },
            { content: 'Les feuilles qui changent de couleur', isGoodAnswer: true },
            { content: 'Les jours les plus courts', isGoodAnswer: false },
            { content: 'Les fleurs qui éclosent', isGoodAnswer: false }
        ]
    },
    {
        question: 'Quelle est la saison pendant laquelle la neige tombe souvent?',
        answer: [
            { content: 'Le printemps', isGoodAnswer: false },
            { content: "L'été", isGoodAnswer: false },
            { content: "L'automne", isGoodAnswer: false },
            { content: "L'hiver", isGoodAnswer: true }
        ]
    },
    {
        question: "Quelles activités sont généralement associées à l'été?",
        answer: [
            { content: 'La baignade', isGoodAnswer: true },
            { content: 'Le ski', isGoodAnswer: false },
            { content: 'Les feux de cheminée', isGoodAnswer: false },
            { content: 'Les randonnées en montagne', isGoodAnswer: true }
        ]
    },
    {
        question: "Quels mois sont traditionnellement considérés comme faisant partie de la saison d'automne?",
        answer: [
            { content: 'Septembre', isGoodAnswer: true },
            { content: 'Décembre', isGoodAnswer: false },
            { content: 'Avril', isGoodAnswer: false },
            { content: 'Juillet', isGoodAnswer: false }
        ]
    }
];
