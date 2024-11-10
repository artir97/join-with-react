import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name: "Help",
        path: "/help"
    },
    {
        name: "Legal Notice",
        path: "/legal"
    },
    {
        name: "Privacy Policy",
        path: "/privacy"
    },
    {
        name: "Log out",
        path: "/login"
    }
]

const NavbarDropdown = ({onClick}) => {
    return (
        <div className="nav-bar-menu-dropdown">
            {
                links.map(l => <React.Fragment key={l.path}>
                    <div className="dropdown-item" onClick={onClick}><Link to={l.path}>{l.name}</Link></div>
                </React.Fragment>)
            }
        </div>
    );
}

export default NavbarDropdown;