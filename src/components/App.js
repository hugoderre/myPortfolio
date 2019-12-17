import React, { Component } from 'react'
import Header from './header/header'
import Sections from './sections/sections'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Sections />
            </div>
        )
    }
}

export default App