import { useState } from "react";
import { Link } from "react-router-dom";

import NavbarDropdown from "./NavbarDropdown";
import MobileSwitch from "./base/MobileSwitch";

const Navbar = () => {
    // TODO Get the actual user from Firebase
    // const { user } = ...
    const user = null;

    const [isOpen, setIsOpen] = useState(false);
    const handleClickDropDown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <>
            <nav className="flex space-x-2">
                <img src={'./assets/icons/navbar/join.svg'} alt="logo" />
                <div className="flex-1" />
                <MobileSwitch desktopComponent={
                    <>
                        <span className="text-sm text-white font-light">Kanban Project Management Tool</span>
                        <Link to="/help">
                            <img src="./assets/icons/navbar/help.svg" alt="Help logo" />
                        </Link>
                    </>
                } />
                <div onClick={handleClickDropDown} className="nav-bar-user">
                    <div className="nav-bar-user-inner">
                        <span className="text-sm">{!user ? "G" : user.name.split(" ").map(n => n.charAt(0)).join("")}</span>
                    </div>
                </div>
            </nav>
            {isOpen && <NavbarDropdown />}
        </>
    );
}

export default Navbar;