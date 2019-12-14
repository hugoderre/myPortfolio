import React, { Component } from 'react'
import { render } from 'react-dom'
import CV from 'cv'

export default class Sections extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-sm-12"></div>
                    <CV />
                <div>
                <div className="col-md-6 col-sm-12"></div>
                    <Projects />
                <div>
            </div>
        )
    }
}

