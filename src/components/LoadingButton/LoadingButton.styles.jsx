import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Loading = styled.button`

    width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    height: 50px;
    background: #c126f5ba;
    font-size: 25px;
    margin-bottom: 1.5rem;
    color: rgb(62, 62, 62);
    transition: all .3s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;


    /* &:hover {
        background: #8c1db1;
        color: #dbdada;
} */
`; 

export const Loader = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: ${spin} 2s linear infinite;
`;
