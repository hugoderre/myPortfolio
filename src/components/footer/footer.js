import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-dark mt-2">
            <div className="row">
                <div className="col-6 text-white text-center">
                    <div>Feel free to contact me by <strong>email</strong> or <strong>phone</strong> !</div>
                    <ul>
                        <li><strong>Email</strong> : hugo.d83@outlook.fr</li>
                        <li><strong>Phone</strong> : 0652037783</li>
                    </ul>
                </div>
                <div className="col-6 text-white text-center">
                    <Link to="/mentions-legales">Mentions légales</Link>
                </div>
            </div>
        </footer>
    )
}
