import { Link } from "react-router-dom";

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

const Footer = () => {
    return (
        <footer>
            {links.map(l => (
                <Link to={l.path}>
                    <div>
                        <img src={l.iconUrl} alt={`${l.name} icon`} />
                        <span>{l.name}</span>
                    </div>
                </Link>
            ))}
        </footer>
    );
}

export default Footer;