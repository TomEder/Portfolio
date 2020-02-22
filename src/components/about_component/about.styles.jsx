import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 3 / 5;
    background-color: rgba(235, 247, 255);
    color: rgb(85, 96, 96);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    `;

export const AboutHead = styled.h1`
    display: flex;
    justify-content: center;
    
`;

export const AboutText = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const AboutSub = styled.h3`
    display: flex;
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

export const AboutImg = styled.img`
 height: 200px;
`;

