import React from 'react';

import './App.css';

import Nav from './Components/Nav';
import LetterGallery from './Components/LetterGallery.jsx'
import Gallery from './Components/Gallery.jsx';
import Carousel from './Components/Carousel.jsx';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer.jsx';
import Policies from './Components/Policies.jsx'

import { tileData, babyPaths, HalloweenPaths, GradPaths } from "/Users/adolfohome/Documents/PartyZoneLetters/party-zone/src/photo.js";


export default function App() {
  return (
    <div>
      <nav>
        <Nav/>
      </nav>
      <body>
        
        <Carousel/>

        <Container style={{textAlign: "center", marginBottom: "3rem"}}>
          <h4 className="display-4" id="msg">Say It Loud! With a Yard Card!</h4>
          <p className="lead">We'll help you celebrate your event or a special person in your life by displaying a message or greeting in your lawn</p>
        </Container>

        <LetterGallery />

        <Container>
          <h3>Step 2 - Pick Your Party Signs! </h3>
        </Container>
        

        <Gallery section={"General Party Signs!"} data={tileData}/>
        <Gallery section={"Baby Shower Signs!"} data={babyPaths}/>
        <Gallery section={"Halloween Party Signs!"} data={HalloweenPaths}/>
        <Gallery section={"Graduate Signs!"} data={GradPaths}/>
        <Policies />
      </body>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
