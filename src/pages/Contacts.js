import { useState } from "react";
import { useContext } from "react";

import ContactLetterList from "../components/contacts/ContactLetterList";
import AddContactOverlay from "../components/contacts/AddContactOverlay";
import MainActionIcon from "../components/icons/MainActionIcon";
import {ContactsContext} from "../contexts/contactsContext";



const codeA = 'A'.charCodeAt(0);

const Contacts = () => {
    const list = useContext(ContactsContext);
    const [showOverlay, setShowOverlay] = useState(false);

    const [contacts, setContacts] = useState([...list]);
    const [map, setMap] = useState(() => {
        let map = contacts.reduce((acc, info) => {
            const initial = info.name.charAt(0).toUpperCase();

            if (!acc[initial]) {
                acc[initial] = [];
            }

            acc[initial].push(info);
            return acc;
        }, {});

        // Fill all empty letters in the map with [] (empty array).
        Array.from({ length: 26 }, (_, i) => String.fromCharCode(codeA + i))
            .filter(letter => !map[letter])
            .forEach(letter => map[letter] = []);

        console.log(map);

        return map;
    });

    const handleAddSubmit = (info) => {
        const initial = info.name.charAt(0).toUpperCase();
        setMap(map => {return {...map, [initial]: [...map[initial], info]}});
        setContacts(contacts => [...contacts, info]);
    }

    return (
        <>
            <div className="page-content overflow-y-scroll">
                {[...Object.entries(map)]
                    .sort((a, b) => a[0] > b[0])
                    .filter(e => e[1].length > 0)
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