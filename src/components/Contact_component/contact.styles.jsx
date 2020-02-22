import styled from 'styled-components';

export const ContactContainer = styled.div`
    grid-column: 1 / 3;
    grid-row: 7 / 9;
    display: flex;
    background-color: rgb(223, 247, 247);
    height: 50%;
    justify-content: space-between;
    color: rgb(85, 96, 96);
    flex-direction: column;
    align-items: center;
    
`
export const ContactLink = styled.a`
    width: 30px;
    display: flex;
    color: rgb(85, 96, 96);
    font-size: 25px;
    flex-direction: row;
    font-size: 30px;
    flex-direction:row;
    

    &:hover {
    color: rgb(85, 96, 96);
    font-size: 35px;
    transition: 0.2s;
}
`;