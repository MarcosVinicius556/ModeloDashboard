import styled from 'styled-components';

export const Introduction = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #9c9c9c;
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
    background: #9c9c9c;
    margin-bottom: 5em;
`;

export const Table = styled.table`
    color: #fff;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    
    
    & thead {
        background: #5c73f8;
        font-size: 24px;
        height: 3em;
        width: 100%;
        /* Pegando o primeiro e último "th" e aplicando um border-radius nas pontas */
        & th:nth-child(1) {
            border-radius: 5px 0px 0px 0px;
        }

        & th:nth-last-child(1) {
            border-radius: 0px 5px 0px 0px;
        }
    }
    
    & tbody {
        font-size: 20px;

        & tr {
            height: 2px;
            line-height: 30px;
            text-align: center;
            
            & + tr {
                border-top: 1px solid #b4b4b4;
            }
        
        }

    }

`;


export const TableFunctions = styled.th`
    justify-content: center;
    align-items: center;

    & button {
        margin: .5em;
    }
`;

export const DeleteButton = styled.button`
    background: #fa5f5f;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: all .2s ease-in-out;

    &:hover{
        background: #883232;
    }
`;

export const EditButton = styled.button`
    background: #c4f8b7;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: all .2s ease-in-out;

    &:hover {
        background: #4b5f45;
    }
`;

