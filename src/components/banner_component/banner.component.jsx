import React, { Component } from 'react';
import './banner.styles.css';
import Stockholm from './photo-of-buildings-near-body-of-water-1529040.jpg';


class Banner extends Component {
    render() {
        return (
            <img className="BannerImage" src={Stockholm} alt=""/>
        );
    }
}

export default Banner;