import { Link, useLocation } from "react-router-dom";

const links = [
    {
        path: "/summary",
        iconUrl: "./assets/icon/footer/summary-icon.png",
        name: "Summary"
    },
    {
        path: "/tasks",
        iconUrl: "./assets/icon/footer/board-icon.png",
        name: "Board"
    },
    {
        path: "/addtask",
        iconUrl: "./assets/icon/footer/add-task-icon.png",
        name: "Add Task"
    },
    {
        path: "/contacts",
        iconUrl: "./assets/icon/footer/contacts-icon.png",
        name: "Contacts"
    }
];

const PageLinks = () => {
    const location = useLocation();

    console.log(location.pathname);

    return (
        <>
            {links.map(l => (
                <Link key={l.path} to={l.path}>
                    <div className={`${location.pathname === l.path ? "lg:bg-blue-200" : ""} lg:flex lg:space-x-2 lg:p-2 rounded`}>
                        <img src={l.iconUrl} alt={`${l.name} icon`} />
                        <span>{l.name}</span>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default PageLinks;