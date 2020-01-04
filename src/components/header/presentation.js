import React from "react"
// import Media from 'react-media';
import './presentation.css'
import './canvas/main'



export default function Presentation() {
    return (
            <div className="container-fluid presentation">
                <div className="fadeIn">
                    <canvas id="scene-canvas" height="500" width="700" tabIndex="1"></canvas>
                    <div className="container-titles">
                        <div className="row">
                            <div className="col-6 text-center">
                                <a href="#">Mon profil</a>
                            </div>
                            <div className="col-6 text-center">
                                <a href="#">Mes projets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}