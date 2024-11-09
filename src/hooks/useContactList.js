import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

export const useContactList = () => {
    const context = useContext(ContactsContext);

    if (context === undefined) {
        throw new Error("useContactList must be used inside a ContactsProvider");
    }

    return context;
}