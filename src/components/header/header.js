import React, { Component } from 'react'
import './header.css'
import profilePicture from '../img/photocv.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PhotoCV(props) {
    return <img className="profile-picture mx-auto" alt="my-epic-profile" src={profilePicture} />
}

export default class Header extends Component {
    render() {

        return (
        
        <Container fluid >
            <Row >
                <Col> 
                    
                    <PhotoCV />
                    <h1 className="text-center">Développeur Web</h1>
                    
                </Col>
                
            </Row>
        </Container>
        
        )
    }
}