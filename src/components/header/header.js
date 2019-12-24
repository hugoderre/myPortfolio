import React from 'react'
import TopBar from './topbar'
import Presentation from './presentation'

export default function Header() {
    return (
        <div className="header">
            <TopBar />
            <Presentation />
        </div>
    )
}