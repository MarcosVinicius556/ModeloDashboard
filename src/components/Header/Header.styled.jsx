import styled from 'styled-components';

export const MobileHeaderContainer = styled.header`
    
    position: absolute;
    height: 40%;
    width: 30%;
    max-width: 450px;
    border-radius: 15px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #614ecc9e;
    z-index: 99;
    ${({ fullmenu }) => fullmenu === 1
                ? `
                    width: 100px;
                    
                `
                : `
                height: 600px; 
                width: 350px;
                border-radius: 4px;
                z-index: 99;`}

    /* Trataremos o header de forma diferente quando se tratar de um mobile */
    @media screen and (max-width: ${({theme}) => theme.size.smallScreen}) {
        z-index: 99;
        bottom: 5em;
        right: 5em;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        ${({ fullmenu }) => fullmenu === 1
                ? `height: 100px; 
                width: 100px;
                border-radius: 50%;
                `
                : `
                height: 600px; 
                width: 350px;
                border-radius: 4px;
                z-index: 99;`}
        
        
        position: fixed;
        padding: .2em;
        
        background: #47474776;
        backdrop-filter: blur(3px);
        transition: all .2s ease-in-out;
    }
    
`;

export const ToggleButton = styled.button`
    @media screen and (max-width: ${({theme}) => theme.size.smallScreen}) {
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
                bottom: 1.7em;
                right: 1.7em;`}

        &:hover {
            transform: scale(1.5);
            filter: drop-shadow(-1px -1px 2px #eeeeee);   
        }
    }
   
`;

export const MobileHeaderContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h1 {
        display: none;
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

    /* Trataremos o header de forma diferente quando se tratar de um mobile */
    @media screen and (max-width: ${({theme}) => theme.size.smallScreen}) {
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
    }
  
`;

export const HeaderLinks = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    ${({ fullmenu }) => fullmenu === 1 ? 
    `
    & span {
        
    }
    ` 
    : 
    `
    & span {
        
    }
    `}
    

    & a {
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 22px;
        transition: all .2s ease-in-out;
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