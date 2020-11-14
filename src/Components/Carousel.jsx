
import React, { Component } from 'react'

import Slider from "react-slick";

import Lane from '../Assets/SlideShow/Lane.jpeg';
import Mikey from '../Assets/SlideShow/Mikey.jpeg';
import Spooky from '../Assets/SlideShow/Spooky.jpeg';

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
            className: "slideshow"
          };

        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={Lane}/>
                    </div>
                    <div>
                        <img src={Mikey} />
                    </div>
                    <div>
                        <img src={Spooky} />
                    </div>
                </Slider>
            </div>
        )
    }
}
