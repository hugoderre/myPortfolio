import React, { Component } from 'react'
import Header from './header/header'
import Sections from './sections/sections'
import Footer from './footer/footer'



class App extends Component {
    render() {
        return (
            <div className="application">
                <Header />
                <Sections />
                <Footer />
            </div>
        );
    }
}

export default App