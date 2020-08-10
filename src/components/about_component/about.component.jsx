import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { AboutContainer, AboutHead, AboutText, AboutSub, AboutLink, AboutImg } from './about.styles';
import Skills from './http___pluspng.com_img-png_logo-javascript-png-javascript-for-ile-y-ld-z-600.png'

library.add(fab)







class About extends Component {
    render() {
        return (
            <AboutContainer className='About'>
                <AboutHead>ABOUT ME</AboutHead>
                <AboutText>I'm studying front-end development at KYH in Stockholm, Sweden. <br /> My skills include HTML, CSS, JavaScript and React.</AboutText>
                <AboutImg src={Skills} alt='HTML, JS, CSS'></AboutImg>
                {/* <AboutLink href="https://github.com/TomEder" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </AboutLink>
                <AboutLink href="https://www.instagram.com/tomederstal/" alt="Instagram" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </AboutLink> */}
                <AboutSub>Stay tuned!</AboutSub>

            </AboutContainer>




        );
    }
}

export default About;