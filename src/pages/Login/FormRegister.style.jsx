import styled, { keyframes } from 'styled-components';

const LinearGradient = keyframes`
        0%{
            background-position: 0px 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0px 50%;
        }
`;

export const FormPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(-20deg, #030303, #626262, #664b95,
                             #8a4bd7, #d87cde,#cb75d3);
    background-size: 300%;
    animation: ${LinearGradient} 6s ease-in-out infinite;
    -moz-animation: ${LinearGradient} 6s ease-in-out infinite;
    -webkit-animation: ${LinearGradient} 6s ease-in-out infinite;
`;

