import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: .5em;
    overflow: scroll;
`;

export const Content = styled.div`
    height: 100vh;
    width: 100%;
`;

export const TitleContainer = styled.div`

    position: absolute;
    margin-left: 8em;
    margin-top: 2em;
    margin-bottom: 1em;

    & h2{
        font-size: 40px;
    }

    & h6 {

    }

    @media screen and ( max-width: ${({theme}) => theme.size.smallScreen} ) {
        width: 100%;
        margin: 0;
        position: relative;
        text-align: center;
    }

`;