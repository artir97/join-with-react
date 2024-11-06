import {useEffect, useState} from "react";
import { useContactList } from "../hooks/useContactList";

import ContactLetterList from "../components/contacts/ContactLetterList";
import AddContactOverlay from "../components/contacts/AddContactOverlay";
import MainActionIcon from "../components/icons/MainActionIcon";


const Contacts = () => {
    const {list} = useContactList();
    const { addContact } = useContactList();
    const [showOverlay, setShowOverlay] = useState(false);
    const [contactsByInitial, setContactsByInitial] = useState({});

    useEffect(() => {
        const codeA = 'A'.charCodeAt(0);
        const newMap = list.reduce((acc, info) => {
            const initial = info.name.charAt(0).toUpperCase();
            if (!acc[initial]) {
                acc[initial] = [];
            }
            acc[initial].push(info);
            return acc;
        }, {});

        // Fill all empty letters in the map with [] (empty array).
        Array.from({ length: 26 }, (_, i) => String.fromCharCode(codeA + i))
            .filter(letter => !newMap[letter])
            .forEach(letter => newMap[letter] = []);

        setContactsByInitial(newMap);
    }, [list]);


    const handleAddSubmit = (info) => {
        addContact(info);
    }

    return (
        <>
            <div className="page-content overflow-y-scroll">
                {[...Object.entries(contactsByInitial)]
                    .filter(e => e[1].length > 0)
                    .sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
                    .map((e, i) => <ContactLetterList key={i} letter={e[0]} list={e[1]} />)}
            </div>
            <MainActionIcon
                url="./assets/icons/contacts/add-contact.svg"
                name={"Add contact icon"}
                onClick={() => setShowOverlay(true)} />
            {showOverlay && <AddContactOverlay
                onAddSubmit={handleAddSubmit}
                onExit={() => setShowOverlay(false)} />}
        </>
    );
}

export default Contacts;