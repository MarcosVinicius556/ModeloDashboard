import styled from 'styled-components';

export const FormContainer = styled.form`
    width: ${ ({ width }) => width ? width : 400 }px;
    height: ${ ({ height }) => height ? height : 400 }px;
    ${ ({ width }) => width ? `max-width: ${ width + 300 }px;` : '' }
    ${ ({ height }) =>  height ? `max-height: ${  height + 300 }px;` : '' }
    
    border: 1px solid gray;
    padding: 1.5em;
    border-radius: 5px;
    background: rgba(25, 25, 25, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & h1 {
        color: #fff;
        margin-bottom: 1.5rem;
        letter-spacing: 1px;
        font-size: 48px;
        width: 100%;
        text-align: center;
    }
    
    & input {
        width: 100%;
        outline: none;
        border-bottom: 1px solid black;
        transition: all .3s ease-in-out;
        background: #fff;
        border: 1px solid rgb(135, 135, 135);
        border-radius: 5px;
        font-size: 19px;
        padding: 8px;
        margin-bottom: 1em;
    }
    
    & input:focus-within {
        background: #fff;
        border-color: rgba(65, 130, 251, 0.8);
        -webkit-box-shadow: 0px 0px 11px 3px rgba(117,149,245,1);
        -moz-box-shadow: 0px 0px 11px 3px rgba(117,149,245,1);
        box-shadow: 0px 0px 11px 3px rgba(117,149,245,1);
    }

    & label {
        font-size: 20px;
        width: 100%;
        height: 25px;
        align-self: flex-start;
        color: #fff;
    }

    & input[type = submit] {
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
        
    }
    
    & input[type = submit]:hover {
        background: #8c1db1;
        color: #dbdada;
    }

    & a {
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        font-size: 22px;
    }
`;