import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import Policy from '../Assets/LetterStyles/Pricing.jpg';
import Ideas from '../Assets/LetterStyles/Ideas.jpg';

export default class Policies extends Component {
    render() {
        return (
            <Container style={{marginTop: "2rem", marginBottom: "2rem"}}>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Policy} />
                        <Card.Body>
                            <Card.Title>Pricing:</Card.Title>
                            <Card.Text>Our letters start at <span style={{"color": "green"}}>$65.00</span>! This includes Delivery, Set up, and your Yard Message!</Card.Text>
                            <Card.Text>
                                Your yard message can be any phrase you would like such as <span style={{"color": "red"}}>"Happy 10th Birthday Alex!"</span>. We try our best to put as many emojis that you would like that will keep the lawn looking nice!
                                If you would like a specific emoji placed make sure to send us a screenshot or let us know when booking through Facebook!
                            </Card.Text>
                            <Card.Text>
                                For areas outside of Mission, McAllen, Pharr, or San Juan please message us for our best price!
                            </Card.Text>
                            <Card.Title>Payments:</Card.Title>
                            <Card.Text>
                                <span style={{"color": "red"}}>A down payment is required for the reservation of your date and designs!</span>
                            </Card.Text>
                            <Card.Text>
                                Party Zone Letters accepts Cash App, Venmo, PayPal, Zelle, and Cash.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Ideas} />
                        <Card.Body>
                            <Card.Text>
                                Say Anything to Celebrate your Special Occasion...or Make it the Perfect Gift for that Someone Special! Either way we want you to celebrate BIG!!! 🥳
                            </Card.Text>
                            <Card.Title>Birthdays:</Card.Title>
                            <ul>
                                <li>Happy 10th Birthday Alex!</li>
                                <li>Hey! Alex is 10 today!</li>
                            </ul>

                            <Card.Title>Baby Showers:</Card.Title>
                            <ul>
                                <li>The Shower Is Here!</li>
                                <li>It's a Boy/Girl!</li>
                                <li>Welcome Baby Alex!</li>
                            </ul>

                            <Card.Title>Celebrations:</Card.Title>
                            <ul>
                                <li>The Party is Here!</li>
                                <li>Merry Christmas!</li>
                                <li>Happy New Year!</li>
                                <li>Prom?</li>
                            </ul>

                            <Card.Title>Graduates:</Card.Title>
                            <ul>
                                <li>Congrats Grads 2020!</li>
                                <li>Congrats!</li>
                                <li>V's Up!</li>
                                <li>A&M Bound</li>
                                <li>UT Bound</li>
                            </ul>
    
                            <Card.Title>Let us know if you have any other idea in mind and we will try our best to make it happen!</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}
