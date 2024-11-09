import { Link } from "react-router-dom";

const NavbarDropdown = () => {
    return (
        <div className="nav-bar-menu-dropdown">
            <div className="dropdown-item"><Link to="/help">Help</Link></div>
            <div className="dropdown-item"><Link to="/legal">Legal Notice</Link></div>
            <div className="dropdown-item"><Link to="/privacy">Privacy Policy</Link></div>
            <div className="dropdown-item"><Link to="/login">Log out</Link></div>
        </div>
    );
}

export default NavbarDropdown;