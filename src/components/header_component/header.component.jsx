import React, { Component } from 'react';
import { HeaderContainer, HeaderText, NavText, HeadA } from './header.styles'

import { Link } from "react-scroll";


class Header extends Component {

    render() {


        return (
            <HeaderContainer>
                <HeaderText>Tom Ederstål</HeaderText>
                <NavText>


                    <HeadA>
                        <Link
                            activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Home
</Link>
                    </HeadA>

                    <HeadA>
                        <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            About
</Link>
                    </HeadA>

                    <HeadA>
                        <Link
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Projects
</Link>
                    </HeadA>

                    <HeadA>
                        <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Contact
</Link>
                    </HeadA>

                </NavText>


            </HeaderContainer>
        );
    }
}

export default Header;