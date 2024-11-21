import { useNotifications } from "../../hooks/useDataContext";
import { getEnvironmentLink } from "../../tools/navigation";

const getColorClassFromType = (type) => {
    switch (type) {
        case "info": return "bg-blue-500";
        case "error": return "bg-red-500";
        case "success": return "bg-green-500";
        default: throw new Error(`Notification: Type does not have a color class associated: ${type}`);
    }
}

/**
 * 
 * @param {Object} param0
 * @param {Number} id - Notification ID, used to delete on click if needed.
 * @param {string} type - [`"info"`, `"error"`] - Type of notification. Effectively changes the color of the push notification. 
 * @param {string} message - Content of the notification
 */
const Notification = ({ id, type = "info", message = "" }) => {
    const { closeNotification } = useNotifications();

    return (
        <div className={`flex items-center space-x-2 px-2 py-1 rounded ${getColorClassFromType(type)} text-white duration-300 ease-in-out`}>
            <p>{message}</p>
            <img className="size-4" src={getEnvironmentLink("assets/icons/forms/close-white.svg")}
                alt="Close icon"
                onClick={() => closeNotification(id)} />
        </div>
    );
}

export default Notification;