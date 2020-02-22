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

@media only screen and (max-width: 720px) {
 display:none;
}

`

export const HeaderContainer = styled.header`
    background-color: lightblue;
    font-size: 15px;
    display: grid;
    grid-column-start: 1 / 3;
    grid-row-start: 1;
    height: 100px;
    width: 100%;
    position: fixed;
    transition: 0.2s;
    box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.75);

    @media only screen and (max-width: 720px) {
    background-color: rgba(85, 96, 96, 0);
    box-shadow: none;
    position: absolute;
    color: white;
    
}

`;

export const HeaderText = styled.h1`
margin: 0;
left: 10px;
align-self: center;


@media only screen and (max-width: 720px) {
 
}
`;

export const HeadA = styled.a`
text-decoration: none;
color: rgb(85, 96, 96);
cursor: pointer;

&:hover {
    color: rgb(85, 96, 96);
    font-size: 25px;
    transition: 0.2s;
}

@media only screen and (max-width: 720px) {
 font-size: 10px;

 &:hover {
    color: rgb(85, 96, 96);
    font-size: 15px;
    transition: 0.2s;
}

}
`



