import { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import MobileSwitch from "./base/MobileSwitch";

const Navbar = () => {
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
                        <img src="./assets/icons/navbar/help.svg" alt="Help logo" />
                    </>
                } />
                <div onClick={handleClickDropDown} className="nav-bar-user">
                    <div className="nav-bar-user-inner">
                        <span>G</span>
                    </div>
                </div>
            </nav>
            {isOpen && <NavbarDropdown />}
        </>
    );
}

export default Navbar;