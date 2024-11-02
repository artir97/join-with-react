import { createContext, useState } from "react";

export const DragContext = createContext(null);

export const DragProvider = ({ children }) => {
    const [isDragging, setDragging] = useState(false)

    return (
        <DragContext.Provider value={{ isDragging, setDragging }}>
            {children}
        </DragContext.Provider>
    )
}