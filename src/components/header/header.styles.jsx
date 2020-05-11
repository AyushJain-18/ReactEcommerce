
import {Link} from 'react-router-dom';
import styled , {css}from 'styled-components';

export const HeaderContainer =styled.div`
    height: 8vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        background-color:  rgb(250, 246, 246);
        height: 12vw;
        width: 90vw;
    }
`;

export const LogoContainer =styled(Link)`
        height: 100%;
        width: 8vw;
        padding: 2vw;
        @media screen and (max-width: 800px) {
                width: 25px;
                padding: 0;
            }
`;

export const OptionsContainer = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media screen and (max-width: 800px) {
               padding-top: 2vw
            }
`;

const optionsStyle = css`
    padding: 1vw 1.5vw;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        display: none;
}

`;
export const OptionLink = styled(Link) `
        ${optionsStyle}
`;

export const OptionDiv = styled.div `
        ${optionsStyle}
`;
export const MenuIcon = styled.div `
        display: none;
        cursor: pointer;
        .hover{
                transform: scale(1.2);
                color: honeydew;
              };
        @media screen and (max-width: 800px) {
                display: block;
                height :1vw;
                padding:0 3vw;
        
`;
export const MenuContent = styled.div `
        height: 20vw;
        background-color:  rgb(250, 246, 246);
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size:14px;
        @media screen and (min-width: 800px){
                display: none;
        }
`;


