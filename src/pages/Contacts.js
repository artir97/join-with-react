import {useEffect, useState} from "react";
import { useContactList } from "../hooks/useContactList";

import ContactLetterList from "../components/contacts/ContactLetterList";
import AddContactOverlay from "../components/contacts/AddContactOverlay";
import MainActionIcon from "../components/icons/MainActionIcon";

const list2 = [
    { name: "Tatiana Wolf", mail: "wolf@gmail.com", phone: "+49 2222 22 222 2" },
    { name: "John Doe", mail: "john.doe@example.com", phone: "+49 1234 56 789 0" },
    { name: "Alice Smith", mail: "alice.smith@example.com", phone: "+49 9876 54 321 0" },
    { name: "Artir Guri", mail: "artir.guri@test.de", phone: "+49 5555 55 555 5" },
];

const Contacts = () => {
    const {list, changeContactList} = useContactList();
    const [showOverlay, setShowOverlay] = useState(false);
    const [map2, setMap2] = useState({});

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

        setMap2(newMap);
    }, [list]);


    const handleAddSubmit = (info) => {
        const initial = info.name.charAt(0).toUpperCase();
        setMap2(map => {return {...map, [initial]: [...map[initial], info]}});
    }

    return (
        <>
            <button onClick={() => changeContactList(list2)} className="border-4 bg-black text-white">TEST</button>
            <button onClick={() => console.log(list)}>CLICK</button>
            <div className="page-content overflow-y-scroll">
                {[...Object.entries(map2)]
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