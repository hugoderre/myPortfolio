import React, { Component } from 'react'
import './header.css'
import profilePicture from '../img/photocv.png'


function PhotoCV(props) {
    return <div className="wrap-img"><img className={props.className} alt={props.alt} src={props.srcImg} /></div>
}

export default class Header extends Component {
    render() {

        return (
            <div></div>       
        )
    }
}