import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';

export const BillGraph = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #583966;
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
    border: 2px solid red; 
    height: 100%;
`;

export const BillDescription = styled.div`
    width: 12em;
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #202020;
    background: #f0f0f0dc;
    font-weight: bold;
    font-size: 20px;
    border-radius: 15px;
`;

