import { useState } from "react";

import ContactLetterList from "../components/contacts/ContactLetterList";
import AddContactOverlay from "../components/contacts/AddContactOverlay";
import MainActionIcon from "../components/icons/MainActionIcon";

const list = [
    { name: "Tatiana Wolf", mail: "wolf@gmail.com", phone: "+49 2222 22 222 2" },
    { name: "John Doe", mail: "john.doe@example.com", phone: "+49 1234 56 789 0" },
    { name: "Alice Smith", mail: "alice.smith@example.com", phone: "+49 9876 54 321 0" },
    { name: "Bob Johnson", mail: "bob.johnson@example.com", phone: "+49 5555 55 555 5" },
    { name: "Emily Davis", mail: "emily.davis@example.com", phone: "+49 4444 44 444 4" },
    { name: "Michael Brown", mail: "michael.brown@example.com", phone: "+49 3333 33 333 3" },
    { name: "Sarah Wilson", mail: "sarah.wilson@example.com", phone: "+49 2222 11 222 2" },
    { name: "David Taylor", mail: "david.taylor@example.com", phone: "+49 6666 66 666 6" },
    { name: "Laura Anderson", mail: "laura.anderson@example.com", phone: "+49 7777 77 777 7" },
    { name: "Daniel Thomas", mail: "daniel.thomas@example.com", phone: "+49 8888 88 888 8" },
    { name: "Sophia Martinez", mail: "sophia.martinez@example.com", phone: "+49 9999 99 999 9" },
    { name: "James Jackson", mail: "james.jackson@example.com", phone: "+49 1010 10 101 0" },
    { name: "Olivia White", mail: "olivia.white@example.com", phone: "+49 2020 20 202 0" },
    { name: "William Harris", mail: "william.harris@example.com", phone: "+49 3030 30 303 0" },
    { name: "Isabella Clark", mail: "isabella.clark@example.com", phone: "+49 4040 40 404 0" },
    { name: "Matthew Lewis", mail: "matthew.lewis@example.com", phone: "+49 5050 50 505 0" },
    { name: "Charlotte Young", mail: "charlotte.young@example.com", phone: "+49 6060 60 606 0" },
    { name: "Joshua Hall", mail: "joshua.hall@example.com", phone: "+49 7070 70 707 0" },
    { name: "Mia Allen", mail: "mia.allen@example.com", phone: "+49 8080 80 808 0" },
    { name: "Ethan King", mail: "ethan.king@example.com", phone: "+49 9090 90 909 0" },
    { name: "Chloe Wright", mail: "chloe.wright@example.com", phone: "+49 1212 12 121 2" },
    { name: "Daniel Scott", mail: "daniel.scott@example.com", phone: "+49 1313 13 131 3" },
    { name: "Ava Green", mail: "ava.green@example.com", phone: "+49 1414 14 141 4" },
    { name: "Samuel Adams", mail: "samuel.adams@example.com", phone: "+49 1515 15 151 5" },
    { name: "Liam Baker", mail: "liam.baker@example.com", phone: "+49 1616 16 161 6" },
    { name: "Ella Gonzalez", mail: "ella.gonzalez@example.com", phone: "+49 1717 17 171 7" },
    { name: "Henry Nelson", mail: "henry.nelson@example.com", phone: "+49 1818 18 181 8" },
    { name: "Scarlett Carter", mail: "scarlett.carter@example.com", phone: "+49 1919 19 191 9" },
    { name: "Gabriel Mitchell", mail: "gabriel.mitchell@example.com", phone: "+49 2022 20 222 2" },
    { name: "Aria Perez", mail: "aria.perez@example.com", phone: "+49 2122 21 222 2" },
    { name: "Lucas Roberts", mail: "lucas.roberts@example.com", phone: "+49 2222 22 222 2" },
    { name: "Grace Turner", mail: "grace.turner@example.com", phone: "+49 2323 23 232 3" },
    { name: "Noah Phillips", mail: "noah.phillips@example.com", phone: "+49 2424 24 242 4" },
    { name: "Victoria Campbell", mail: "victoria.campbell@example.com", phone: "+49 2525 25 252 5" }
];

const codeA = 'A'.charCodeAt(0);

const Contacts = () => {
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