import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LegalAndPrivacy from "./LegalAndPrivacy";

const NavbarWrapper = () => {
    return (
        <>
            <Navbar simplified />
            <div className="flex">
                <LegalAndPrivacy external vertical />
                <Outlet />
            </div>
        </>
    );
}

export default NavbarWrapper;