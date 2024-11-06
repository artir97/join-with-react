import { Link } from "react-router-dom";

const NavbarDropdown = () => {
    return (
        <div className="nav-bar-menu-dropdown">
            <div className="dropdown-item"><Link to="/help">Help</Link></div>
            <div className="dropdown-item">Legal Notice</div>
            <div className="dropdown-item">Privacy Policy</div>
            <div className="dropdown-item">Log out</div>
        </div>
    );
}

export default NavbarDropdown;