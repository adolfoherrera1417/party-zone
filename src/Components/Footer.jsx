import React from 'react'
import { Container } from 'react-bootstrap';

import { FacebookProvider, Like } from 'react-facebook';

export default function Footer() {
    return (
        <Container className="nav" fluid style={{padding:"2em", marginTop: "2em", display:"block"}}>
            <p id="contact" >Contact PZL at 956-571-9639 or via <a href="http://www.facebook.com/partyzoneletters">Facebook!</a></p>
            <h1 id="comapny-name"> #Party Zone Letters</h1>
            <FacebookProvider appId="partyzoneletters">
                <Like href="http://www.facebook.com/partyzoneletters" colorScheme="light" showFaces buttonCount share size="large" layout="button_count" />
            </FacebookProvider>
        </Container>
    )
}
