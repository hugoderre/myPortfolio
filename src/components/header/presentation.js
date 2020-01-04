import React from "react"
// import Media from 'react-media';
import './presentation.css'
import './canvas/main'
import './border-animation.css'


export default function Presentation() {
    return (
            <div className="container-fluid presentation">
                <div className="fadeIn">
                    <canvas id="scene-canvas" height="400" width="400" tabIndex="1"></canvas>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-12 text-center title-item">
                                <a href="#" className="border-animation">
                                    <div className="border-animation__inner">Mon profil</div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-12 text-center title-item">
                            <a href="#" className="border-animation">
                                    <div className="border-animation__inner">Mes projets</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}