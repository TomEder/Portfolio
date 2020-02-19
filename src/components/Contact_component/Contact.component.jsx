import React, { Component } from 'react';
import { ContactContainer } from './contact.styles'

class Contact extends Component {
    render() {
        return (
            <ContactContainer className="Contact">
            <h1>CONTACT ME!</h1>
            <h3>Email me at tomederstal@gmail.com</h3>
            </ContactContainer>


        );
    }
}

export default Contact;