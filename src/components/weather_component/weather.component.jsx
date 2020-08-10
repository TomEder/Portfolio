import React from 'react';

import {WeatherContainer} from './weather.styles'

const Weather = (props) => {
return (
    <WeatherContainer className="container">
        <div className="cards">
            <h2>{props.city}, {props.country}</h2>
            <h3>{props.temp_celsius}&deg;C</h3>
            
        </div>
    </WeatherContainer>
);
};

export default Weather;