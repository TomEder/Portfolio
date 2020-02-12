import styled from 'styled-components';


export const NavText = styled.div`
color: rgb(85, 96, 96);
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
width: 90%;
font-size: 20px;
grid-column: 2;
align-items: center;

`

export const HeaderContainer = styled.header`
    background-color: rgba(235, 247, 255);
    color: rgb(85, 96, 96);
    font-size: 15px;
    display: grid;
    grid-column-start: 1 / 3;
    grid-row-start: 1;
    height: 100px;
    width: 100%;
    position: fixed;
    transition: 0.2s;
    box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.75);

`;

export const HeaderText = styled.h1`
margin: 0;
left: 10px;
`;

export const HeadA = styled.a`
text-decoration: none;
color: rgb(85, 96, 96);

&:hover {
    color: rgb(85, 96, 96);
    font-size: 25px;
    transition: 0.2s;
}

`