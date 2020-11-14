import React from 'react';

import { tileData } from "../photo";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export default function Gallery(props) {
    const listItems = props.data.map((tile) =>
    <LazyLoadComponent>
      <Col xs={4} md={2}>
          <Image src={tile.path} style={{boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"}} thumbnail />
      </Col>
      </LazyLoadComponent>
  );

    return (
    <div >
        <Container>
            <h3 style={{marginBottom: "1em",marginTop: "1em"}}> {props.section} </h3>
            <Row>
                {listItems} 
            </Row>
        </Container>
    </div>
    )
}
