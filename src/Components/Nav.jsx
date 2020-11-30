import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

import { FacebookProvider, Page } from 'react-facebook';

import "./Nav.css";

export default class Nav extends Component {

  constructor() {
    super();
    this.state = {
      width:  400
    }
  }

  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 290 });
    } else {
      this.setState({ width: 400,});
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div>
        <Container className="nav" fluid>
          <h1 id="comapny-name">Party Zone Letters</h1>       
        </Container>

        <Container fluid className="social">
          <a href="https://www.facebook.com/partyzoneletters">Contact us on <FontAwesomeIcon style={{color: "#3b5998"}} icon={faFacebookSquare} size='lg'/></a>
          <FacebookProvider appId="partyzoneletters">
            <Page href="https://www.facebook.com/partyzoneletters" width={this.state.width} />
          </FacebookProvider>    
        </Container>

        <Container className="postNav" fluid>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: "center"}}>
              <Navbar.Text className="nav-link" style={{color: "#f6f2f4"}}> Home </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
      
    )
  }
}



