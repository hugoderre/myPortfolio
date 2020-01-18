import React from 'react'
import './topbar.css'


const socialItems = [
    {
        link : "https://www.linkedin.com/in/hugo-derr%C3%A9-a3144017b/",
        icon : "btn-sm fab fa-linkedin"
    },
    {
        link : "https://twitter.com/DevGohu",
        icon : "btn-sm fab fa-twitter"
    },
    {
        link : "https://www.instagram.com/gohuuuu/",
        icon : "btn-sm fab fa-instagram"
    },
    {
        link : "mailto:hugo.d83@outlook.fr",
        icon : "btn-sm 	fas fa-envelope"
    }
]

function SocialMedias(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer"><i className={props.icon}></i></a>
    )
}

export default function TopBar() {
    return (
        
        <nav name="top-page" className="navbar navbar-dark bg-dark">
            <div className="row test">
                <div className="col-6">
                    <h1 className="navbar-brand mb-0">HUGO DERRE</h1>
                </div>
                <div className="col-6">
                    <div className="mb-0 text-right d-block s-m">
                        {socialItems.map((item, index) => 
                        <SocialMedias key={index} link={item.link} icon={item.icon} />
                        )}
                    </div>
                </div>
            </div>
        </nav> 
            
    )
}