import { createContext, useState } from "react";

const TIMEOUT = 3000; // 3 seconds
let nextId = 0;

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
    const [data, setData] = useState({ notifications: [] });

    const pushNotification = ({ type, message }) => {
        const notification = { id: nextId++, type, message };

        console.log("Pushed notification", message, type);

        setData(data => {
            return { ...data, notifications: [...data.notifications, notification] }
        });
        setTimeout(() => {
            setData(data => {
                return {
                    ...data,
                    // This would have worked if there was no way to close the notification early.
                    // notifications: data.notifications.slice(1)
                    notifications: data.notifications.filter(n => n.id !== notification.id)
                }
            });
        }, TIMEOUT);
    }

    const pushNotificationInfo = (message) => {
        pushNotification({ type: "info", message });
    }

    const pushNotificationError = (message) => {
        pushNotification({ type: "error", message });
    }

    const pushNotificationSuccess = (message) => {
        pushNotification({ type: "success", message });
    }

    const closeNotification = (id) => {
        setData(data => {
            return {
                ...data,
                // This would have worked if there is no way to close the notification early.
                // notifications: data.notifications.slice(1)
                notifications: data.notifications.filter(n => n.id !== id)
            }
        });
    }

    return (
        <NotificationContext.Provider value={{ ...data, pushNotificationInfo, pushNotificationError, pushNotificationSuccess, closeNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}