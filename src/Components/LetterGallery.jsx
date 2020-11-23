import React, { Component } from 'react'

import {Container} from 'react-bootstrap'


import Gradiaent from '../Assets/LetterStyles/BlueandRed.JPG';
import Gold from '../Assets/LetterStyles/Gold.JPG';
import Green from '../Assets/LetterStyles/Green.JPG';
import Multi from '../Assets/LetterStyles/Multi.JPG';
import MultiBlack from '../Assets/LetterStyles/MultiBlackBorder.JPG';
import Orange from '../Assets/LetterStyles/Orange.JPG';
import RedWhite from '../Assets/LetterStyles/RedWhite.JPG'

import ABCGold from '../Assets/LetterStyles/abcGold.JPG';
import ABCBlack from '../Assets/LetterStyles/abcBlack.JPG';
import ABCBoy from '../Assets/LetterStyles/abcBoy.JPG';
import ABCGirl from '../Assets/LetterStyles/abcGirl.JPG';


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
                        <p>HBD - Blue to Red Gradient</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Gold} thumbnail />
                        <p>HBD - Gold</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Green} thumbnail />
                        <p>HBD - Green</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Multi} thumbnail />
                        <p>HBD - Multi-Color</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MultiBlack} thumbnail />
                        <p>HBD - Multi-Color w/BlackBorder</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Orange} thumbnail />
                        <p>HBD - Orange</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={RedWhite} thumbnail />
                        <p>HBD - Red and White</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={ABCBlack} thumbnail />
                        <p>ABC Black *For Name ONLY</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={ABCGold} thumbnail />
                        <p>ABC Gold *For Name ONLY</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={ABCBoy} thumbnail />
                        <p>ABC Multi-Dark *For Name ONLY</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={ABCGirl} thumbnail />
                        <p>ABC Multi-Light *For Name ONLY</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
