import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import './contact.css'


export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            // to_name: '<YOUR_EMAIL_ID>',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'default_service',
            'template_gaytrCAc',
            templateParams,
            'user_CA2bREJQpmNIFD9v5qYNF'
        )
        alert('Votre message a bien été envoyé')
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <div className="card contact-container">
                <div className="card-body">

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <h2 className="text-center py-4 font-bold font-up danger-text contact-title">Contact me</h2>
                        <div className="md-form">
                            <i className="fa fa-user prefix grey-text"></i>
                            <input
                                type="text"
                                id="form31"
                                className="form-control"
                                placeholder="Your name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this, 'name')}
                                required />

                        </div>
                        <div className="md-form">
                            <i className="fa fa-envelope prefix grey-text"></i>
                            <input
                                type="email" 
                                id="form21"
                                className="form-control"
                                placeholder="Your email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this, 'email')}
                                required />

                        </div>
                        <div className="md-form">
                            <i className="fa fa-tag prefix grey-text"></i>
                            <input
                                type="text"
                                id="form321"
                                className="form-control"
                                placeholder="Subject"
                                onChange={this.handleChange.bind(this, 'subject')}
                                required />

                        </div>
                        <div className="md-form">
                            <i className="fa fa-pencil prefix grey-text"></i>
                            <textarea
                                type="text"
                                id="form81"
                                className="md-textarea"
                                placeholder="Your message"
                                onChange={this.handleChange.bind(this, 'message')}
                                required></textarea>

                        </div>
                        <div className="text-center">
                            <button className="btn btn-secondary" type="submit">Send</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}