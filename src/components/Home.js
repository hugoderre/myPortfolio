import React, { Component } from 'react'
import Header from './header/header'
import Sections from './sections/sections'
import Footer from './footer/footer'


class Home extends Component {
    render() {
        return (
            <div>
                <Sections />
                <Footer />
            </div>
        )
    }
}

export default Home