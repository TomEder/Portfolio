import React, { Component } from 'react';
import './nav.styles.css'



class NavBar extends Component {
    render() {
        return (
            <nav class='side_nav'>
                <a href="#"><h2>Home</h2></a>

                <a href="#"><h2>About</h2></a>

                <a href="#"><h2>Projects</h2></a>

                <a href="#"><h2>Contact</h2></a>

            </nav>
        );
    }
}

export default NavBar;