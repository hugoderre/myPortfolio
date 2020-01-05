import React from 'react'
import images from './images'


// POUR LES PROJETS, METTRE IMAGES EN NOIR ET BLANC => COULEUR EN HOVER (grayscall transition)

const projectsData = [
    {
        title: "Intégrez un thème Wordpress pour un client",
        description: "Création d'un site web une agence de chalets de luxe.",
        technology: ["Wordpress"],
        url: "http://www.chaletsetcaviar.hugoderre.fr/",
        srcImg: images.chalets
    },
    {
        title: "Analysez les besoins de votre client pour son Festival de films",
        description: "Création d'un site web un festival de cinéma à Paris.",
        technology: ["HTML5", "CSS3", "Bootstrap"],
        url: "http://hugoderre.fr/films_plein_air/",
        srcImg: images.festival
    },
    {
        title: "Concevez la solution technique d'une application de restauration en ligne, Express Food",
        description: "Réaliser des schéma UML (classes, séquences, cas d'utilisation...), concevoir une base de données (MPD,Power Architect) et l'intégrer avec un SGBD",
        technology: ["UML", "MySQL", "phpMyAdmin"],
        url: "http://hugoderre.fr/expressfood/",
        srcImg: images.uml
    },
    {
        title: "Imaginez un générateur de citations",
        description: "Découverte de la programmation avec Javascript (ES6), création de deux générateurs de citations avec un thème propre à chacun",
        technology: ["Javascript"],
        url: "http://hugoderre.fr/quoteGenerator/",
        srcImg: images.quotor
    },
    {
        title: "Créez un jeu de plateau tour par tour en JS",
        description: "Réalisation d'une application plus complexe, un jeu en Javascript. Découverte de la bibliothèque jQuery.",
        technology: ["Javascript", "jQuery"],
        url: "http://hugoderre.fr/cs2d/",
        srcImg: images.cs2d
    },
    {
        title: "Lancez votre propre site d'avis de restaurants",
        description: "Première utilisation d'AJAX. Création d'une application de listing de restaurant avec l'API Google Maps (map, geolocation, markers, ratings, comments). Mon serveur n'ayant pas encore de certificat SSL, certaines features (comme la géolocalisation) ne sont pas dispnible",
        technology: ["Javascript", "jQuery", "API REST"],
        url: "http://hugoderre.fr/resto_ateco/",
        srcImg: images.resto
    },
    {
        title: "Reprenez et améliorez un projet existant",
        description: "Analyse et optimisation du code d'une application déjà existante de To-Do-List en Model-View-Controller. Réalisation de test unitaire avec 'Jasmine'. Écriture d'une documentation technique sous forme de GitWiki.",
        technology: ["Javascript", "Jasmine"],
        url: "http://hugoderre.fr/todo-list-app/",
        srcImg: images.todo
    }
]

// const ColoredLine = ({ color }) => (
//     <hr
//         style={{
//             color: color,
//             backgroundColor: color,
//             height: .5
//         }}
//     />
// );

function Card(props) {
    return (
        <div className="fadeIn">
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.data.srcImg} className="card-img-top" alt=""></img> 
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <p className="card-text">{props.data.description}</p>
                        <p>Technologies : {props.data.technology.map((tech,index) => <span key={tech + index}>{tech}.</span>)}</p>
                        <a href={props.data.url} className="btn btn-primary btn-card" target="_blank" rel="noopener noreferrer">Voir</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className="container">
            <div className="row row-cards">
                {projectsData.map((project, index) =>
                    <Card key={project.title + '-' + index} data={projectsData[index]}/>
                )}
            </div>
        </div>
    )
}