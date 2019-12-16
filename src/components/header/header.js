import React, { Component } from 'react'
import './header.css'
import profilePicture from '../img/photocv.png'


function PhotoCV(props) {
    return <div className="wrap-img"><img className={props.className} alt={props.alt} src={props.srcImg} /></div>
}

export default class Header extends Component {
    render() {

        return (
            
            <nav className="navbar navbar-dark bg-dark">
                <div className="row test">
                    <div className="col-6">
                        <span className="navbar-brand mb-0 ml-5 h1">HUGO DERRÉ</span>
                    </div>
                    <div className="col-6">
                        <div className="mb-0 text-center d-block s-m">
                        
                            <a href="#"><i className="btn-sm fab fa-facebook-f"></i></a>
                            <a href="#"><i className="btn-sm fab fa-twitter"></i></a>
                            <a href="#"><i className="btn-sm fab fa-google-plus-g"></i></a>
                            <a href="#"><i className="btn-sm fab fa-youtube"></i></a>
                            <a href="#"><i className="btn-sm fab fa-instagram"></i></a>
                            
                        </div>
                    </div>
                </div>
            </nav> 
              
        )
    }
}