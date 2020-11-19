import React, { Component } from 'react'

import {Container} from 'react-bootstrap'


import Gradiaent from '../Assets/LetterStyles/BlueandRed.JPG';
import Gold from '../Assets/LetterStyles/Gold.JPG';
import Green from '../Assets/LetterStyles/Green.JPG';
import Multi from '../Assets/LetterStyles/Multi.JPG';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class LetterGallery extends Component {
    render() {
        return (
            <Container style={{margin: "3rem auto"}}>
                <h3>Step 1 - Pick Your Letter Theme! </h3>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={Gradiaent} thumbnail />
                        <p>Blue to Red Gradient</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Gold} thumbnail />
                        <p>Gold</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Green} thumbnail />
                        <p>Green</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Multi} thumbnail />
                        <p>Multi-Color</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
