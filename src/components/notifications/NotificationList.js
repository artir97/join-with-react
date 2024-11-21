import { useNotifications } from "../../hooks/useDataContext";
import Notification from "./Notification";

const NotificationList = () => {
    const { notifications } = useNotifications();

    return (
        <div className="absolute z-50 right-5 top-24 flex flex-col space-y-4 items-end">
            {notifications && notifications.map((n) =>
                <Notification key={n.id} id={n.id} type={n.type} message={n.message} />
            )}
        </div>
    );
}

export default NotificationList;