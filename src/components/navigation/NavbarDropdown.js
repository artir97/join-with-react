import { getAuth, signOut } from "firebase/auth";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useNotifications } from "../../hooks/useDataContext";

const NavbarDropdown = ({ onClick }) => {
    const { pushNotificationError, pushNotificationInfo } = useNotifications();
    const auth = getAuth();
    const links = useMemo(() => {
        const base = [
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
            }
        ];

        base.push(auth.currentUser ? {
            name: "Log out",
            path: "/login",
            callback: () => {
                signOut(auth).then(() => {
                    pushNotificationInfo("Successfully signed out.")
                }).catch((error) => {
                    pushNotificationError(`${error.code}: ${error.message}`);
                })
            }
        } : {
            name: "Exit",
            path: "/login"
        });

        return base;
    }, [pushNotificationError, pushNotificationInfo, auth]);

    return (
        <div className="nav-bar-menu-dropdown">
            {
                links.map(l => <React.Fragment key={l.path}>
                    <div className="dropdown-item" onClick={() => {
                        if (l.callback) {
                            l.callback();
                        }
                        onClick();
                    }}><Link to={l.path}>{l.name}</Link></div>
                </React.Fragment>)
            }
        </div>
    );
}

export default NavbarDropdown;