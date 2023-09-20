import styled from 'styled-components';

export const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TableContainer = styled.div`
    width: 50%;
    max-width: 800px;
    height: 600px;
    border-radius: 15px;
    background: #fff;
    margin-left: .5em;
`;

export const GraphContainer = styled.div`
    width: 50%;
    max-width: 500px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    background: #fff;
    padding: 1em;
    margin-right: .5em;

    & h2 {
        margin-top: -4em;
        margin-bottom: 3em;
    }
`;

export const Table = styled.table`
    color: #fff;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    
    
    & thead {
        background: #7f6dbd;
        font-size: 24px;
        height: 3em;
        width: 100%;
        
        /* Pegando o primeiro e último "th" e aplicando um border-radius nas pontas */
        & th:nth-child(1) {
            border-radius: 15px 0px 0px 0px;
        }

        & th:nth-last-child(1) {
            border-radius: 0px 15px 0px 0px;
        }
    }
    
    & tbody {
        font-size: 20px;
        color: #323232;

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
    background: #fc8282;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: all .2s ease-in-out;

    &:hover{
        background: #bb5c5c;
    }
`;

export const EditButton = styled.button`
    background: #c4f8b7;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: all .2s ease-in-out;

    &:hover {
        background: #97bd8b;
    }
`;

