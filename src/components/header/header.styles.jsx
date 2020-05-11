
import {Link} from 'react-router-dom';
import styled , {css}from 'styled-components';

export const HeaderContainer =styled.div`
    height: 8vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1vw;
    @media screen and (max-width: 600px) {
        background-color:  rgb(250, 246, 246);
        height: 12vw;
        width: 90vw;
    }
`;

export const LogoContainer =styled(Link)`
        height: 100%;
        width: 8vw;
        padding: 2vw;
        @media screen and (max-width: 600px) {
                width: 30px;
                height: 25px
            }
`;

export const OptionsContainer = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media screen and (max-width: 600px) {
               padding-top: 2vw
            }
`;

const optionsStyle = css`
    padding: 1vw 1.5vw;
    cursor: pointer;
    @media screen and (max-width: 600px) {
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
        @media screen and (max-width: 600px) {
                display: block;
                height :1vw;
                padding:0 3vw;
        
`;
export const MenuContent = styled.div `
        margin-top: 4vw;
        height: 20vw;
        background-color:  rgb(250, 246, 246);
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        @media screen and (min-width: 600px){
                display: none;
        }
`;


