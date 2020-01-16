import React, { Component } from 'react'
import Header from './components/header/header'
import Sections from './components/sections/sections'
import Footer from './components/footer/footer'
import Main from './routes.js'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Main />
            </div>
        )
    }
}

export default App