import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { fab } from '@fortawesome/free-brands-svg-icons'
import { AboutContainer, AboutHead, AboutText, AboutSub, AboutLink } from './about.styles'; 

library.add(fab)

  





class About extends Component {
    render() {
        return (
            <AboutContainer className='About'>
                <AboutHead>ABOUT ME</AboutHead>
                <AboutText>I'm styding to become a front-end developer at KYH in Stockholm, Sweden.</AboutText>
                <AboutLink href="https://github.com/TomEder" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </AboutLink>
                <AboutLink href="https://www.instagram.com/tomederstal/" alt="Instagram" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </AboutLink>
                
                <AboutSub>Stay tuned!</AboutSub>
                
            </AboutContainer>
           
                
         
            
        );
    }
}

export default About;