import React, { Component } from 'react';
import Stockholm from './photo-of-buildings-near-body-of-water-1529040.jpg';
import {BannerImage} from './banner.styles'

class Banner extends Component {
    render() {
        return (
            
            <BannerImage className="Home" src={Stockholm} alt=""/>
            
        );
    }
}

export default Banner;