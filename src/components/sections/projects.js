import React from 'react'

// RETROUVER LE CHEMIN D'UNE IMAGE
// function importAll(r) {
//     return r.keys().map(r);
//   }
// const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
// console.log(images)

const projectsData = [
    {
        title: "Intégrez un thème Wordpress pour un client",
        description: "Création d'un site web une agence de chalets de luxe.",
        technology: ["Wordpress"],
        url: "http://www.chaletsetcaviar.hugoderre.fr/",
        srcImg: "/static/media/chalets.5cde683f.png"
    },
    {
        title: "Analysez les besoins de votre client pour son Festival de films",
        description: "Création d'un site web un festival de cinéma à Paris.",
        technology: ["HTML5", "CSS3", "Bootstrap"],
        url: "http://hugoderre.fr/films_plein_air/",
        srcImg: "/static/media/festival.12a57c30.png"
    },
    {
        title: "Concevez la solution technique d'une application de restauration en ligne, Express Food",
        description: "Réaliser des schéma UML (classes, séquences, cas d'utilisation...), concevoir une base de données (MPD,Power Architect) et l'intégrer avec un SGBD",
        technology: ["UML", "MySQL", "phpMyAdmin"],
        url: "http://hugoderre.fr/expressfood/",
        srcImg: "/static/media/uml.cc7186fc.png"
    },
    {
        title: "Imaginez un générateur de citations",
        description: "Découverte de la programmation avec Javascript (ES6), création de deux générateurs de citations avec un thème propre à chacun",
        technology: ["Javascript"],
        url: "http://hugoderre.fr/quoteGenerator/",
        srcImg: "/static/media/quotor.d2c484e1.png"
    },
    {
        title: "Créez un jeu de plateau tour par tour en JS",
        description: "Réalisation d'une application plus complexe, un jeu en Javascript. Découverte de la bibliothèque jQuery.",
        technology: ["Javascript", "jQuery"],
        url: "http://hugoderre.fr/cs2d/",
        srcImg: "/static/media/cs2d.1f6bc094.png"
    },
    {
        title: "Lancez votre propre site d'avis de restaurants",
        description: "Première utilisation d'AJAX. Création d'une application de listing de restaurant avec l'API Google Maps (map, geolocation, markers, ratings, comments). Mon serveur n'ayant pas encore de certificat SSL, certaines features (comme la géolocalisation) ne sont pas dispnible",
        technology: ["Javascript", "jQuery", "API REST"],
        url: "http://hugoderre.fr/resto_ateco/",
        srcImg: "/static/media/resto.b8771766.png"
    },
    {
        title: "Reprenez et améliorez un projet existant",
        description: "Analyse et amélioration/débogage du code d'une application déjà existante de To-Do-List en Model-View-Controller. Réalisation de test unitaire avec 'Jasmine'. Écriture d'une documentation technique sous forme de GitWiki.",
        technology: ["Javascript", "Jasmine"],
        url: "http://hugoderre.fr/todo-list-app/",
        srcImg: "/static/media/todo.a008230e.png"
    }
]

function Card(props) {
    return (
        <div className="card">
            <img src={props.data.srcImg} className="card-img-top" alt=""></img>
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
                <a href={props.data.url} className="btn btn-primary">Voir</a>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className="container">
            {projectsData.map((project, index) =>
                <Card key={project.title + '-' + index} data={projectsData[index]}/>
            )}
        </div>
    )
}