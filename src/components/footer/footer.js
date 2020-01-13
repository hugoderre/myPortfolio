import React from 'react'
import './footer.css'
import Contact from './contact'

export default function Footer() {
    return (
        <footer>
            <div className="contact-container">
                <div data-aos="fade-right" data-aos-once="true" data-aos-anchor-placement="center">
                    <Contact />
                </div>
                
            </div>
           
        </footer>
    )
}

