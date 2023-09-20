import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: .5em;
`;

export const Content = styled.div`
    height: 100vh;
    width: 100%;
`;

export const TitleContainer = styled.div`

    position: absolute;
    margin: 3em 5em;

    & h2{
        font-size: 40px;
    }

    & h6 {

    }

`;