import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

export const btnReset = css`
    font-family: inherit;
    outline: none;
    border: none;
    background: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
`

const v = {
    sidebarWidth: `300px`,
    smSpacing: `8px`,
    mdSpacing: `16px`,
    lgSpacing: `24px`,
    xlSpacing: `32px`,
    xxlSpacing: `48px`,
    borderRadius: `6px`,
};

const lightTheme = {
    bg: "rgb(255,255,255)",
    bgAlpha: "rgba(250,250,250,.3)",
    bg2: "rgb(245,245,245)",
    bg3: "rgb(230,230,230)",
    text: "rgb(45,45,45)",
    primary: "rgb(52,131,235)",
    details: "#7451f8",
};

export const SLayout = styled.div`
    display: flex;
`

export const SMain = styled.div`
    padding: calc(${v.smSpacing} * 2);
    width: 100%;
    h1{
        font-size: 14px;
    }
`


export const SSidebar = styled.div`
    width: auto;
    background: ${lightTheme.bg2};
    height: 100vh;
    padding: ${v.lgSpacing};
    position:  relative;
    transition: all 0.5s ease;
`;

export const SLogo = styled.div`
    width: 52px;
    img{
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
    margin-bottom: ${v.lgSpacing};
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background:${lightTheme.details};
    margin: ${v.lgSpacing} 0;
`

export const SLinkContainer = styled.div`
    background: ${({ isActive }) => (!isActive ? `transparent` : lightTheme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    :hover {
        box-shadow: inset 0 0 0 1px ${lightTheme.details};
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({isActive }) => (!isActive ? lightTheme.text : lightTheme.text)};
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
        font-size: 20px;
    }
`;