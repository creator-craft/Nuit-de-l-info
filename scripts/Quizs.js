
const RADIO = 1, CHECKBOX = 2, NUMBER = 3, DATE = 4, COLOR = 5, RANGE = 6, TEXT = 7

const quizs = [
    {
        label: "?",
        questions: [
            // [ "Who is Napoleon", RADIO, 1, ["A King", "An Emperor", "My father"], 2 ]
            {
                text: "Who is Napoleon",
                type: RADIO, points: 1,
                answers: ["A King", "An Emperor", "My father"], good: 2
            },
            {
                text: "Which are my favourite languages ?",
                type: CHECKBOX, points: 2,
                answers: ["HTML", "CSS", "JS"], good: 4
            },
            {
                text: "How many Titouans exists in the class ?",
                type: NUMBER, param:"min=0 max=20 value=0", good: 1, points: 4,
            },
            {
                text: "When is the 11 sept. event come ?",
                type: DATE, good: "2001-09-11", points: 3,
            },
            {
                text: "How happy are you with this super quizz ?",
                type: RANGE, points: 0, param: "min=0 max=10 step=0 value=10 oninput='this.nextElementSibling.value = 1 + ~~this.value;this.value=10'"
            }
        ]
    },
    {
        label: "Programming",
        questions: [
            {
                text: "Quel est le langage de programmation principalement utilisé pour le développement web côté client ?",
                type: RADIO,
                answers: ["Java", "Python", "JavaScript", "Ruby"],
                good: 2
            },
            {
                text: "Combien d'octets sont généralement présents dans un kilo-octet (Ko) ?",
                type: NUMBER,
                param: "min=0 max=9999999 value=0",
                good: 1024
            },
            {
                text: "Quel est le principal avantage de l'utilisation de Git dans le développement logiciel ?",
                type: RADIO,
                answers: ["Suivi des versions", "Gestion des bases de données", "Traitement d'images"],
                good: 0
            },
            {
                text: "Quand est-ce que le langage de programmation Python a été créé (date de 1er version) ?",
                type: DATE,
                good: "1991-02-20"
            },
            {
                text: "Quels sont les types de données de base en JavaScript ?",
                type: CHECKBOX,
                answers: ["Number", "String", "Boolean", "Array"],
                good: [0, 1, 2]
            },
            {
                text: "Quelle est la couleur par défaut d'un lien non visité en HTML ?",
                type: COLOR,
                good: "#0000ff"
            },
            {
                text: "Qu'est-ce que l'acronyme SQL représente dans le domaine de la programmation ?",
                type: RADIO,
                points: 3,
                answers: ["Structured Query Language", "Simple Query Language", "Scripted Question Language"],
                good: 0
            },
            {
                text: "Combien de bits sont présents dans un octet ?",
                type: RANGE,
                param: "min=0 max=128 step=1", default: 0,
                good: 8
            },
            {
                text: "Quel est le rôle de l'instruction 'else' dans une structure de contrôle en programmation ?",
                type: RADIO,
                answers: ["Elle définit une condition alternative.", "Elle déclare une variable.", "Elle boucle sur un ensemble d'instructions."],
                good: 0
            },
            {
                text: "Quelles sont des plates-formes de déploiement couramment utilisées pour les applications web ?",
                type: CHECKBOX,
                answers: ["Heroku", "Azure", "Amazon Web Services (AWS)", "WhatsApp"],
                good: [0, 1, 2]
            }
        ]
    },
    {
        label: "Nature",
        questions: [
            {
                text: "Quelle est la principale source de gaz à effet de serre responsable du réchauffement climatique ?",
                type: RADIO,
                answers: ["Méthane", "Dioxyde de carbone (CO2)", "Ozone", "Protoxyde d'azote"],
                good: 1
            },
            {
                text: "Quel pays a émis le plus de dioxyde de carbone (CO2) en 2020, contribuant ainsi au changement climatique ?",
                type: RADIO,
                answers: ["Chine", "États-Unis", "Inde", "Brésil"],
                good: 0
            },
            {
                text: "En quelle année la première Conférence des Parties (COP) a-t-elle eu lieu, marquant le début des négociations internationales sur le climat ?",
                type: NUMBER,
                param: "min=1950 max=2023 value=1995",
                good: 1995
            },
            {
                text: "Quel terme désigne la perte de diversité biologique due à l'activité humaine, telle que la destruction des habitats naturels ?",
                type: RADIO,
                answers: ["Érosion", "Déforestation", "Pollution", "Extinction"],
                good: 3
            },
            {
                text: "Combien de tonnes de plastique sont estimées être déversées annuellement dans les océans du monde ?",
                type: NUMBER,
                param: "min=0 max=10000000 value=1000000",
                good: 8000000
            }
        ]
    },
    {
        label: "",
        questions: [
            {
                text: "Puis-je changer les choses à mon échelle ?",
                type: RADIO,
                answers: ["Oui, chaque action individuelle compte", "Non, l'impact individuel est négligeable", "Peut-être, cela dépend des circonstances"],
                good: 0
            },
            {
                text: "Est-ce qu'une transition vers un mode de vie plus durable est vraiment accessible à tous ?",
                type: RADIO,
                answers: ["Oui, tout le monde peut adopter des pratiques durables", "Non, cela dépend des ressources financières", "Partiellement, des changements progressifs sont possibles"],
                good: 2
            },
            {
                text: "La technologie est-elle compatible avec l'écologie ?",
                type: RADIO,
                answers: ["Oui, la technologie peut contribuer à des solutions durables", "Non, la technologie est souvent source de pollution", "Cela dépend de la manière dont la technologie est utilisée"],
                good: 0
            },
            {
                text: "N'est-il pas trop tard pour agir ?",
                type: RADIO,
                answers: ["Oui, les dommages sont irréversibles", "Non, des actions immédiates peuvent atténuer les effets", "Cela dépend de l'ampleur des efforts mondiaux"],
                good: 1
            }
        ]
    },
    {
        label: "",
        questions: [
            {
                text: "Quelle est la principale cause du réchauffement climatique observé au cours des dernières décennies ?",
                type: RADIO,
                answers: ["Les variations naturelles du Soleil", "Les éruptions volcaniques", "Les activités humaines, principalement l'émission de gaz à effet de serre"],
                good: 2,
                explanation: " Le consensus scientifique est que les activités humaines, telles que la combustion de combustibles fossiles et la déforestation, libèrent d'importantes quantités de gaz à effet de serre (comme le dioxyde de carbone) dans l'atmosphère, contribuant ainsi au réchauffement climatique."
            },
            {
                text: "Quel est l'effet de serre ?",
                type: RADIO,
                answers: ["Un processus naturel permettant de maintenir la chaleur sur Terre", "Une diminution de la température moyenne de la planète", "Une augmentation rapide de la couche d'ozone"],
                good: 0,
                explanation: " L'effet de serre est un phénomène naturel où certains gaz dans l'atmosphère retiennent la chaleur du Soleil, empêchant ainsi que toute la chaleur ne soit renvoyée dans l'espace. C'est essentiel pour maintenir la planète à une température habitable."
            },
            {
                text: "Qu'est-ce que l'empreinte carbone d'une personne ?",
                type: RADIO,
                answers: ["Le nombre total d'empreintes digitales laissées par une personne", "La quantité totale de gaz à effet de serre émise par les activités quotidiennes d'une personne", "La taille moyenne des chaussures d'une personne"],
                good: 1,
                explanation: "L'empreinte carbone mesure la quantité totale de gaz à effet de serre émise directement ou indirectement par une personne, une organisation, un événement ou un produit."
            },
            {
                text: "Quel est l'effet attendu du changement climatique sur les océans ?",
                type: RADIO,
                answers: ["Augmentation du niveau de la mer et acidification des océans", "Diminution des tempêtes tropicales", "Refroidissement global des océans"],
                good: 0,
                explanation: "Le changement climatique est associé à une augmentation du niveau de la mer en raison de la fonte des glaciers et des calottes glaciaires, ainsi qu'à l'expansion thermique de l'eau. De plus, l'absorption accrue de dioxyde de carbone par les océans entraîne une acidification, ce qui peut avoir des conséquences négatives sur la vie marine."
            }
        ]
      }
]
