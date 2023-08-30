import styled from 'styled-components';

export const FormContainer = styled.form`
    width: ${ ({ width }) => width ? width : 600 };
    max-heigth: ${ ({ heigth }) => heigth ? heigth : 600 };
    border: 1px solid gray;

    & input {
        border: 2px solid red;
    }

    & input[type = submit] {
        border: 2px solid green;
    }

    & a {
        border: 2px solid yellow;
    }
`;