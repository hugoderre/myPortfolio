import React, { Component } from 'react'
import Header from './components/header/header'
import Sections from './components/sections/sections'
import Footer from './components/footer/footer'


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Sections />
                <Footer />
            </div>
        )
    }
}

export default App