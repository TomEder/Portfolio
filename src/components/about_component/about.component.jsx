import React, { Component } from 'react';
import Avatar from './avataaars.png';


import { AboutContainer, AboutHead, AboutText, AboutSub, AboutLink} from './about.styles';


class About extends Component {
    render() {
        return (
            <AboutContainer className='About'>
                <AboutHead>ABOUT ME</AboutHead>
                <AboutText>I'm styding to become a front-end developer at KYH in Stockholm, Sweden.</AboutText>
                <AboutLink href="https://github.com/TomEder" target="_blank">My GitHub</AboutLink>
                <AboutSub>Stay tuned!</AboutSub>
            </AboutContainer>
        );
    }
}

export default About;