import React from "react";
import { useLocation } from "react-router-dom";
import { 
    SSidebar, SDivider, SLinkContainer,
    SLink, SIcon
 } from "./styles";
import {RiNumber1, RiNumber2} from 'react-icons/ri';


const Sidebar = () =>{
    const {pathname} = useLocation();
    return(
        <SSidebar>
            <SDivider/>
            {linksArray.map(({ icon, label, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={{width: `fit-content`}}>
                        <SIcon>{icon}</SIcon>
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider/>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Problem1",
        icon: <RiNumber1/>,
        to: "/problem1",
    },
    {
        label: "Problem2",
        icon: <RiNumber2/>,
        to: "/problem2",
        notification:2
    },
];
export default Sidebar;