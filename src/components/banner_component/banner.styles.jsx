import styled from 'styled-components';

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    display: grid;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    display: flex;

    @media only screen and (max-width: 720px) {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}
`;