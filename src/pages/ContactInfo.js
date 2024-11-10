import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useContactList } from "../hooks/useContactList";

import NameIcon from "../components/icons/NameIcon";
import MainActionIcon from "../components/icons/MainActionIcon";
import EditContactOverlay from "../components/contacts/EditContactOverlay";
import ButtonIcon from "../components/icons/ButtonIcon";

const Section = ({ title, value, colorClass = "" }) => (
    <div className="flex flex-col space-y-2">
        <h3 className={"font-semibold"}>{title}</h3>
        <p className={`font-light ${colorClass}`}>{value}</p>
    </div>
);

const ContactInfo = ({ contactMail = "" }) => {
    const { email } = useParams();
    const [showOverlay, setShowOverlay] = useState(false);
    const [info, setInfo] = useState({ name: '', mail: '', phone: '' });
    const { list, editContact } = useContactList()

    useEffect(() => {
        if (email || contactMail) {
            const contact = list.find((contact) => contact.mail === email || contact.mail === contactMail);
            if (contact) {
                setInfo(contact);
            }
        }
    }, [list, email, contactMail]);

    const handleEditSubmit = (info) => {
        editContact(info)
    }

    return (
        <>
            <div className={`${email ? "page-content" : ""} flex flex-col space-y-4 p-4`}>
                <div>
                    <div className="flex items-center">
                        <h2 className="font-bold flex-1">Contact information</h2>
                        <span className="p-4 text-blue-500 cursor-pointer">{"<"}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NameIcon name={info.name} large className={"border border-white shadow-md"} />
                        {!email && contactMail && <div className="flex flex-col items-start space-y-2">
                            <p className="text-3xl font-light">{info.name}</p>
                            <div className="flex space-x-2">
                                <ButtonIcon name="Edit" onClick={() => setShowOverlay(true)} className="font-light text-sm" imageUrl="./assets/icons/forms/edit.svg" />
                                <ButtonIcon name="Delete" className="font-light text-sm" imageUrl="./assets/icons/forms/trash.svg" />
                            </div>
                        </div>}
                        {email && <p className="text-3xl font-light">{info.name}</p>}
                    </div>
                </div>
                <Section title={"Mail address"} value={info.mail} colorClass="text-blue-500" />
                <Section title={"Phone"} value={info.phone} />
            </div>
            {email && <MainActionIcon
                url="./assets/icons/contacts/more.svg"
                name={"Add contact icon"}
                onClick={() => setShowOverlay(true)} />}
            {showOverlay && <EditContactOverlay
                onEditSubmit={handleEditSubmit}
                onExit={() => setShowOverlay(false)}
                info={info}
            />}
        </>
    );
}

export default ContactInfo;