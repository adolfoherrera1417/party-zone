import React from 'react';

import './App.css';

import Nav from './Components/Nav';
import Gallery from './Components/Gallery.jsx';
import Carousel from './Components/Carousel.jsx';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer.jsx';

import { tileData, babyPaths, HalloweenPaths } from "/Users/adolfohome/Documents/PartyZoneLetters/party-zone/src/photo.js";


export default function App() {
  return (
    <div>
      <nav>
        <Nav/>
      </nav>
      
      <body>
        {/* <div id="body">
        <div className="gradient-border">
          <p style={{fontSize: 48, letterSpacing: 3, wordSpacing: 30}}>Say It Loud! With a Yard</p>
        </div>
        </div> */}
        <Carousel/>
        <Container style={{textAlign: "center", marginBottom: "3rem"}}>
          <h4 className="display-4" id="msg">Say It Loud! With a Yard Card!</h4>
          <p className="lead">We'll help you celebrate your event or a special person in your life by displaying a message or greeting in your lawn</p>
        </Container>
        <Gallery section={"General Party Signs!"} data={tileData}/>
        <Gallery section={"Baby Shower Signs!"} data={babyPaths}/>
        <Gallery section={"Halloween Party Signs!"} data={HalloweenPaths}/>
      </body>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
