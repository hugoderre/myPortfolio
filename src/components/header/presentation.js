import React from "react"
// import Media from 'react-media';
import './presentation.css'
import './canvas/main'
import './border-animation.css'

function Button(props) {
    return(
    <div className="col-sm-6 col-6 text-center title-item">
        <a href="#" className="border-animation">
            <div className="border-animation__inner">{props.name}</div>
        </a>
    </div>
    )
}

export default function Presentation () {
    return (
            <div className="presentation flex">
                <div className="fadeIn">
                    <canvas id="scene-canvas" height="400" width="400" tabIndex="1"></canvas>
                    <div className="container">
                        <div className="row">
                            <Button name="My profile" />
                            <Button name="My projects" />
                        </div>
                    </div>
                </div>
            </div>
    )
}