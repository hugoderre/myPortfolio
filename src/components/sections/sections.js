import React from 'react'
import Presentation from './presentation/presentation'
import Profile from './profile/profile'
import Projects from './projects/projects'
import Contact from './contact/contact'
import './sections.css'

export default function Sections() {
    return (
        <div>
            <Presentation />
            <Profile />
            <Projects />
            <Contact />
        </div>
    )
}