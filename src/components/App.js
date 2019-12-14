import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header/header'
import Sections from './sections/wrapperSections'

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