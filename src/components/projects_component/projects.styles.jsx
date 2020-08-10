import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 5 / 7;
    height: 100%
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    color: rgb(85, 96, 96);
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 720px) {
    font-size: 9px;
    text-align: center;
}
    
    `
export const ProjectsHead = styled.h1`
    justify-content: center;

`

export const ProjectImg = styled.img`
height: 200px;

   @media only screen and (max-width: 720px) {
    height: 175px;
}

`

export const ProjectItem = styled.h3`


`