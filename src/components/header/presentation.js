import React from "react"
// import Media from 'react-media';
import './presentation.css'
import './canvas/main'
import './border-animation.css'
import { Link } from 'react-scroll'

function Button(props) {
    return(
    
    <Link className="col-sm-6 col-6 text-center title-item" activeClass="active" to={props.to} spy={true} smooth={true} duration={800}>
        <div className="border-animation">
            <div className="border-animation__inner">{props.name}</div>
        </div>
    </Link>
    
    )
}

export default function Presentation () {
    return (
        <div className="presentation flex">
            <div className="fadeIn">
                <canvas id="scene-canvas" height="400" width="400" tabIndex="1"></canvas>
                <div className="container">
                    <div className="row">
                        <Button name="My profile" to="profile" />
                        <Button name="My projects" to="projects"/>
                    </div>
                </div>
            </div>
        </div>
    )
}