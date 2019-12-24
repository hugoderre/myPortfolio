import React from "react"
import './presentation.css'
import './canvas/meshes'
import './canvas/transform'
import './canvas/main'

export default function Presentation() {
    return (
        <div className="container-fluid presentation">
            <canvas id="scene" height="500" width="700" tabIndex="1"></canvas>
        </div>
    )
}