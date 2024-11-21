import { useEffect, useState } from "react";
import { useContactList } from "../hooks/useContactList";

import ContactLetterList from "../components/contacts/ContactLetterList";
import AddContactOverlay from "../components/contacts/AddContactOverlay";
import MainActionIcon from "../components/icons/MainActionIcon";
import ButtonIcon from "../components/icons/ButtonIcon";
import MobileSwitch from "../components/base/MobileSwitch";
import ContactInfo from "./ContactInfo";
import { getEnvironmentLink } from "../tools/navigation";


const Contacts = () => {
    const { list, addContact } = useContactList();
    const [showOverlay, setShowOverlay] = useState(false);
    const [contactsByInitial, setContactsByInitial] = useState({});

    const [contactMail, setContactMail] = useState("");

    useEffect(() => console.log(contactMail), [contactMail]);

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
            <div className="page-content pt-4 flex">
                <div className="h-full max-lg:w-full flex flex-col content-main-desktop">
                    <MobileSwitch desktopComponent={
                        <ButtonIcon
                            imageUrl={getEnvironmentLink("assets/icons/contacts/add-contact.svg")}
                            name={"Add new contact"}
                            className="sticky px-2 py-1 rounded bg-blue-500 text-white self-center"
                            side="right"
                            onClick={() => setShowOverlay(true)} />
                    } />
                    <div className="overflow-y-scroll w-full flex-1">
                        {[...Object.entries(contactsByInitial)]
                            .filter(e => e[1].length > 0)
                            .sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
                            .map((e, i) => <ContactLetterList key={i} letter={e[0]} list={e[1]} setContactMail={(mail) => setContactMail(mail)} />)}
                    </div>
                </div>
                <MobileSwitch desktopComponent={contactMail &&
                    <div className="flex-1">
                        <ContactInfo contactMail={contactMail} onExit={() => setContactMail("")} />
                    </div>
                } />
            </div>
            <MobileSwitch mobileComponent={
                <MainActionIcon
                    url={getEnvironmentLink("assets/icons/contacts/add-contact.svg")}
                    name={"Add contact icon"}
                    onClick={() => setShowOverlay(true)} />
            } />
            {showOverlay && <AddContactOverlay
                onAddSubmit={handleAddSubmit}
                onExit={() => setShowOverlay(false)} />}
        </>
    );
}

export default Contacts;