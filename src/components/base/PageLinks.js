import { Link, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";
import useViewport from "../../hooks/useViewport";

import { handleColorInjection } from "../../tools/svg";

const links = [
    {
        path: "/summary",
        iconUrl: "./assets/icons/navigation/summary.svg",
        name: "Summary"
    },
    {
        path: "/tasks",
        iconUrl: "./assets/icons/navigation/tasks.svg",
        name: "Board"
    },
    {
        path: "/addTask",
        iconUrl: "./assets/icons/navigation/add-task.svg",
        name: "Add Task"
    },
    {
        path: "/contacts",
        iconUrl: "./assets/icons/navigation/contacts.svg",
        name: "Contacts"
    }
];

const PageLinks = () => {
    const location = useLocation();
    const { isMobile } = useViewport();

    return (
        <>
            {links.map(l => (
                <Link key={l.path} to={l.path}>
                    <div className={`${location.pathname === l.path && "lg:bg-blue-200"} lg:flex lg:space-x-2 lg:p-2 rounded`}>
                        <ReactSVG src={l.iconUrl} beforeInjection={svg => handleColorInjection(svg, '#3b82f6',  () => location.pathname === l.path && isMobile())} />
                        <span className={isMobile && location.pathname === l.path ? "max-lg:text-blue-500" : ""}>{l.name}</span>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default PageLinks;