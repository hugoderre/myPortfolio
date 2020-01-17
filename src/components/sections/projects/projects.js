import React from 'react'
import images from './images'
import './hover-effect.css'
import './projects.css'

// POUR LES PROJETS, METTRE IMAGES EN NOIR ET BLANC => COULEUR EN HOVER (grayscall transition)

const projectsData = [
    {
        title: "Intégrer un thème Wordpress pour un client",
        description: "Création d'un site web une agence de chalets de luxe.",
        technology: ["Wordpress"],
        url: "http://www.chaletsetcaviar.hugoderre.fr/",
        srcImg: images.chalets
    },
    {
        title: "Analyser les besoins d'un client pour son Festival de films",
        description: "Création d'un site web un festival de cinéma à Paris.",
        technology: ["Bootstrap"],
        url: "http://hugoderre.fr/films_plein_air/",
        srcImg: images.festival
    },
    {
        title: "Concevoir la solution technique d'une application de restauration en ligne.",
        description: "Réaliser des schéma UML (classes, séquences, cas d'utilisation...), concevoir une base de données (MPD,Power Architect) et l'intégrer avec un SGBD",
        technology: ["UML", "MySQL"],
        url: "http://hugoderre.fr/expressfood/",
        srcImg: images.uml
    },
    {
        title: "Imaginer un générateur de citations",
        description: "Découverte de la programmation avec Javascript (ES6), création de deux générateurs de citations avec un thème propre à chacun",
        technology: ["Javascript"],
        url: "http://hugoderre.fr/quoteGenerator/",
        srcImg: images.quotor
    },
    {
        title: "Créer un jeu de plateau tour par tour en JS",
        description: "Réalisation d'une application plus complexe, un jeu en Javascript. Découverte de la bibliothèque jQuery.",
        technology: ["Javascript", "jQuery"],
        url: "http://hugoderre.fr/cs2d/",
        srcImg: images.cs2d
    },
    {
        title: "Lancer site d'avis/listing de restaurants",
        description: "Première utilisation d'AJAX. Création d'une application de listing de restaurant avec l'API Google Maps (map, geolocation, markers, ratings, comments). Mon serveur n'ayant pas encore de certificat SSL, certaines features (comme la géolocalisation) ne sont pas dispnible",
        technology: ["Javascript", "API REST"],
        url: "http://hugoderre.fr/resto_ateco/",
        srcImg: images.resto
    },
    {
        title: "Reprendre et améliorer un projet existant",
        description: "Analyse et optimisation du code d'une application déjà existante de To-Do-List en Model-View-Controller. Réalisation de test unitaire avec 'Jasmine'. Écriture d'une documentation technique sous forme de GitWiki.",
        technology: ["Javascript", "Jasmine"],
        url: "http://hugoderre.fr/todo-list-app/",
        srcImg: images.todo
    }
]


function Card(props) {
    return (
        
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="hovereffect img-projects-wrapper" data-aos="fade-down" data-aos-once="true" data-aos-anchor-placement="center">
                <img src={props.data.srcImg} alt="" />
                <div className="overlay">
                    <h2>{props.data.title}</h2>
                    <div>{props.data.technology.map((tech,index) => <span className="tech-item btn" key={tech + index}>{tech} </span>)}</div>
                    <p>
                        <a href={props.data.url} target="_blank" rel="noopener noreferrer">Voir</a>
                    </p>
                </div>
            </div>
        </div>
        
        )
}

export default function Projects() {
    return (
        <section data-aos="fade-left" data-aos-once="true" data-aos-anchor-placement="center" className="container projects-container" name="projects">
            <h2 className="text-center text-white sections-title">Projects</h2><hr></hr>
            <div className="row project-container">
                {projectsData.map((project, index) =>
                    <Card key={project.title + '-' + index} data={projectsData[index]}/>
                )}
            </div>
        </section>
    )
}