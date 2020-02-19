import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 3 / 5;
    background-color: rgba(235, 247, 255);
    color: rgb(85, 96, 96);
    height: 50%;
    justify-content: center;
    
    `;

export const AboutHead = styled.h1`
    display: flex;
    justify-content: center;
    
`;

export const AboutText = styled.p`
    display: flex;
    justify-content: center;
`;

export const AboutSub = styled.h3`
    display: flex;
    justify-content: center;
`;

export const AboutLink = styled.a`
    width: 30px;
    display: flex;
    color: rgb(85, 96, 96);
    font-size: 25px;
    

    &:hover {
    color: rgb(85, 96, 96);
    font-size: 27px;
    transition: 0.2s;
}
`;

