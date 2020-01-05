import React from 'react'
import './profile.css'
import MyFace from '../../img/photocv.png'

export default function Profile() {
    return (
        <div className="container-fluid profile-main">
            <div className="profile-box">
                <div className="img-wrapper">
                    <img src={MyFace} alt="La photo de mon CV"/>
                </div>
                
            </div>
        </div>
    )
}