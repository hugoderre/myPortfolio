import React, { Component } from 'react'
import { render } from 'react-dom'
import CV from './cv'
import Projects from './projects'

export default class Sections extends Component {
    render() {
        return (
            <section className="row">
                <article className="col-md-6 col-sm-12 text-center">
                    <CV />
                </article>
                <article className="col-md-6 col-sm-12 text-center">
                    <Projects />
                </article>
            </section>
        )
    }
}

