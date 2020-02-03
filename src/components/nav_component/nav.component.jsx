import React, { Component } from 'react';
import { NavContainer, NavText} from './nav.styles';



class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <a href="#"><NavText>Home</NavText></a>

                <a href="#"><NavText>About</NavText></a>

                <a href="#"><NavText>Projects</NavText></a>

                <a href="#"><NavText>Contact</NavText></a>

            </NavContainer>
        );
    }
}

export default NavBar;