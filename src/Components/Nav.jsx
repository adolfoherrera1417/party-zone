import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Container className="nav" fluid>
          <h1 id="comapny-name" >Party Zone Letters</h1>
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



