
import React, { Component } from 'react'

import Slider from "react-slick";

import AdOne from '../Assets/SlideShow/AdOne.jpg';
import Gold from '../Assets/SlideShow/GoldLetterJCarlos.jpg';
import Gradiant from '../Assets/SlideShow/gradiant.jpg';
import Orange from '../Assets/SlideShow/OrangeSetup.jpg';
import Spooky from '../Assets/SlideShow/spooky.jpg'

import { Container } from 'react-bootstrap';

import "./slideshow.css";

export default class Carousel extends Component {

    render() {

        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: 1,
            autoplaySpeed: 3000,
            className: "slideshow",
            draggable: false,
          };

        return (
            <Container style={{textAlign: "center", justifyContent: "center"}}>
                <Slider {...settings}>
                    <div>
                        <img src={AdOne}/>
                    </div>
                    <div>
                        <img src={Gold} />
                    </div>
                    <div>
                        <img src={Spooky} />
                    </div>
                    <div>
                        <img src={Gradiant} />
                    </div>
                    <div>
                        <img src={Orange} />
                    </div>
                </Slider>
            </Container>
        )
    }
}
