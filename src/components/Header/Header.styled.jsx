import styled from 'styled-components';

export const HeaderContainer = styled.header`
    margin-left: 1.5em;
    margin-top: 1.5em;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    ${({ fullmenu }) => fullmenu === 1
            ? `height: 100px; 
               width: 100px;
               border-radius: 50%;`
            : `
               height: 600px; 
               width: 350px;
               border-radius: 4px;`}
    
    
    position: absolute;
    padding: .2em;
    
    background: #474747e6;
    backdrop-filter: blur(15px);
    transition: all .2s ease-in-out;
    /* border: 1px solid #2e2e2e; */
    
    /* -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.75); */
`;

export const ToggleButton = styled.button`

    width: 50px;
    height: 50px;
    position: absolute;
    visibility: visible;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;

    ${({ fullmenu }) => fullmenu === 1
            ? `align-self: center;`
            : `
            align-self: flex-start;
            top: .3em;
            left: 1em;`}

    &:hover {
        transform: scale(1.5);
        filter: drop-shadow(-1px -1px 2px #eeeeee);   
    }
`;

export const HeaderContent = styled.div`
${({ fullmenu }) => fullmenu === 1
        ? 'display: none;'
        : 'display: flex;'
 }
    width: 100%;
    align-items: center;
    flex-direction: column;
    height: 80%;

    & h1 {
        color: #fff;
        font-size: 35px;
        margin-bottom: .5em;
    }
     
    & img {
        border: 2px solid #272727;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 90px;
        width: 90px;
        border-radius: 50%;
        margin-bottom: 2em;
    }

    & span {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    & a {
        color: #fff;
        width: 100%;
        height: 100%;
        font-size: 22px;
        transition: all .2s ease-in-out;
        display: flex;
        align-items: center;

        & svg {
           margin-right: 1em;
        }

        & + a {
            border-top: 1px solid #999797;
        }

        &:hover {
            background: #424242;
        }
    }

    
`;