import React, { Component } from 'react';
import { HeaderContainer, HeaderText, NavText, HeadA} from './header.styles'



class Header extends Component {

    constructor() {
        super();
        this.state = {
            scrollPos: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.updateScroll);
        this.updateScroll();
    }

    componentWillUnmountt() {
        window.removeEventListener("scroll", this.updateScroll);
    }

    updateScroll = () =>
        this.setState({ scrollPos: document.documentElement.scrollTop });

    render() {  


        return (
            <HeaderContainer>
                <HeaderText>Tom Ederstål</HeaderText>

                <NavText>

                    <HeadA href="#">Home</HeadA>

                <HeadA href="#">About Me</HeadA>

                <HeadA href="#">Projects</HeadA>

                <HeadA href="#">Contact</HeadA> 
                </NavText>
               
                
            </HeaderContainer>
        );
    }
}

export default Header;