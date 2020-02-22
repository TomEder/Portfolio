import React, { Component } from 'react';
import { ContactContainer, ContactLink } from './contact.styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

class Contact extends Component {
    render() {
        return (
            <ContactContainer className="Contact">
            <h1>CONTACT ME!</h1>
                <ContactLink href="https://github.com/TomEder" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </ContactLink>
                <ContactLink href="https://www.instagram.com/tomederstal/" alt="Instagram" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </ContactLink>
            
            <h3>Email: tomederstal@gmail.com</h3>
            <h3>Phone: 0707713480</h3>
            </ContactContainer>
             


        );
    }
}

export default Contact;