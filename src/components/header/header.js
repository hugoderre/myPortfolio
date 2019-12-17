import React, { Component } from 'react'
import './header.css'


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
                            <a href="https://www.linkedin.com/in/hugo-derr%C3%A9-a3144017b/" target="_blank" rel="noopener noreferrer"><i className="btn-sm fab fa-linkedin"></i></a>
                            <a href="https://twitter.com/DevGohu" target="_blank" rel="noopener noreferrer"><i className="btn-sm fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/gohuuuu/" target="_blank" rel="noopener noreferrer"><i className="btn-sm fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </nav> 
              
        )
    }
}