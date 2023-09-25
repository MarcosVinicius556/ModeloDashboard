import styled from 'styled-components';

export const Main = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: ${({theme}) => theme.size.smallScreen} ) {
        flex-direction: column;
    }
`;

export const TableContainer = styled.div`
    width: 50%;
    max-width: 800px;
    height: 600px;
    border-radius: 15px;
    background: #fff;
    margin-left: .5em;

    @media screen and (max-width: ${({theme}) => theme.size.smallScreen}) {
        width: 100%;
        height: 1200px;
        display: flex;
        justify-content: center;
        height: 1200px;
    }
`;

export const GraphContainer = styled.div`
    width: 50%;
    max-width: 800px;
    height: 600px;
    border-radius: 15px;
    background: #fff;
    margin-left: .5em;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    border-radius: 15px;
    background: #fff;
    padding: 1em;

    & h2 {
        margin-top: -4em;
        margin-bottom: 3em;
    }

    @media screen and ( max-width: ${({theme}) => theme.size.smallScreen} ) {
        width: 100%;
        margin: 1em 0;
        height: 1200px;
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
            
            button {
                width: 35px;
                height: 35px;
                & svg {
                    width: 35px;
                }

                 & + button {
                    margin-left: 10px;
                 }
            }
        }

    }

    @media screen and (max-width: ${({theme}) => theme.size.smallScreen}) {
        border: 0;
        width: 90%;
        margin-top: 1em;

        & table caption {
            font-size: 1em;
        }

        & thead {
            height: 1px;
            width: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
        }
        
        & tr {
            border-bottom: 3px solid #ddd;
            display: block;
            margin-bottom: .60em;
        }

        & td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: .6em;
            text-align: right;
        }

        & td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        & button {
            width: 25px;
            height: 25px;
            & svg {
                width: 19px;
            }
        }
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

