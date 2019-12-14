import React, { Component } from 'react'
import './header.css'
import profilePicture from '../img/photocv.png'


function PhotoCV(props) {
    return <img className={props.className} alt={props.alt} src={props.srcImg} />
}

export default class Header extends Component {
    render() {

        return (
        
        <div class="contrainer-fluid">

            <div className="row">
                <div className="col">  
                    <PhotoCV srcImg={profilePicture} className="profile-picture mx-auto" alt="my-epic-profile"/>
                    <h1 className="text-center">Développeur Web</h1>
                </div>
            </div>
        </div>
        
        )
    }
}