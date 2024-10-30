import { useContext } from "react";
import { DragContext } from "../contexts/DragContext";

const useData = (name, error) => {
    const context = useContext(name);

    if (!context)
        throw new Error(error);
    return context;
}
 
export const useDrag = () => useData(DragContext, "useDrag should be used inside a DragProvider.");