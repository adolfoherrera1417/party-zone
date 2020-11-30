import React from 'react'
import { Container } from 'react-bootstrap';

import { FacebookProvider, Like } from 'react-facebook';

export default function Footer() {
    return (
        <Container className="nav" fluid style={{marginTop:"2em", display:"block"}}>
            <h1 id="comapny-name"> #Party Zone Letters</h1>
            <FacebookProvider appId="partyzoneletters">
                <Like href="http://www.facebook.com/partyzoneletters" colorScheme="light" showFaces buttonCount share size="large" layout="button_count" />
            </FacebookProvider>
        </Container>
    )
}
