import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Link to="/summary">
                <div>
                    <img src={'./assets/icon/footer/summary-icon.png'} alt="summary-icon"/>
                    <span>Summary</span>
                </div>
            </Link>

            <Link to="/tasks">
                <div>
                    <img src={'./assets/icon/footer/board-icon.png'} alt="summary-icon"/>
                    <span>Board</span>
                </div>
            </Link>

            <Link to="/addtask">
                <div>
                    <img src={'./assets/icon/footer/add-task-icon.png'} alt="summary-icon"/>
                    <span>Add Task</span>
                </div>
            </Link>

            <Link to="/contacts">
                <div>
                    <img src={'./assets/icon/footer/contacts-icon.png'} alt="summary-icon"/>
                    <span>Contacts</span>
                </div>
            </Link>
        </footer>
    );
}

export default Footer;