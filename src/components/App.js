import React, { Component } from 'react'
import Header from './header/header'
import Sections from './sections/sections'
import Footer from './footer/footer'
import { Helmet } from "react-helmet"
import OgImage from "../img/portfolio.png"



class App extends Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta property='og:image' content={"http://hugoderre.fr" + OgImage} />
                </Helmet>
                <Header />
                <Sections />
                <Footer />
            </div>
        );
    }
}

export default App