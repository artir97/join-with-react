import { Link, useLocation } from "react-router-dom";

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
        path: "/addtask",
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