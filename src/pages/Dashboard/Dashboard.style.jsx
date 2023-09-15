import styled from 'styled-components';

export const Introduction = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #b823e6;
    margin-bottom: 2em;

    & h1 {
        margin-bottom: 1em;
        font-size: 34px;
        color: #fff;
        background: #5e5e5e76;
        border-radius: 15px;
        width: 80%;
        max-width: 600px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const TableContainer = styled.div`
    height: 800px;
    border-radius: 10px;
    background: #b823e6;
`;

export const Table = styled.table`
    color: #fff;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;


    & thead {
        background: #7f44a7;
        font-size: 24px;
        height: 3em;
        width: 100%;
    }

    & tbody {
        font-size: 20px;

        & tr {
        }
    }

`;

