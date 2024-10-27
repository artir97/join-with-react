import {useState} from "react";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickDropDown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <>
            <nav>
                <img src={'./assets/icon/mobile-nav-join-logo.png'} alt="logo"/>
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