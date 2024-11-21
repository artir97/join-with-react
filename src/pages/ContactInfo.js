import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useContactList } from "../hooks/useContactList";

import NameIcon from "../components/icons/NameIcon";
import MainActionIcon from "../components/icons/MainActionIcon";
import EditContactOverlay from "../components/contacts/EditContactOverlay";
import ButtonIcon from "../components/icons/ButtonIcon";
import {projectFirestore} from "../firebase/config";
import { getEnvironmentLink } from "../tools/navigation";

const Section = ({ title, value, colorClass = "" }) => (
    <div className="flex flex-col space-y-2">
        <h3 className={"font-semibold"}>{title}</h3>
        <p className={`font-light ${colorClass}`}>{value}</p>
    </div>
);

const ContactInfo = ({ contactMail = "", onExit = () => {} }) => {
    const { id } = useParams()
    const { email } = useParams();
    const [showOverlay, setShowOverlay] = useState(false);
    const [info, setInfo] = useState({ name: '', mail: '', phone: '' });
    const [error, setError] = useState('');
    const { list, editContact, deleteContact } = useContactList();


    useEffect(() => {
        if (id) {
            // Fetch from Firestore only if `id` is provided
            projectFirestore
                .collection('contacts').doc(id).get().then((doc) => {
                    if (doc.exists) {
                        setInfo(doc.data());
                    } else {
                        setError('Could not find that contact info');
                    }
                })
                .catch((err) => {
                    setError('Failed to fetch contact info');
                    console.error(err);
                });
        } else if (email || contactMail) {
            // Use local data if `email` or `contactMail` is provided
            const contact = list.find(
                (contact) => contact.mail === email || contact.mail === contactMail
            );
            if (contact) {
                setInfo(contact);
            } else {
                setError('Could not find that contact info locally');
            }
        }
    }, [id, email, contactMail, list]);


    const handleEditSubmit = (info) => {
        editContact(info)
    }

    const handleDelete = (mail) => {
        console.log(id);
        deleteContact(mail);
        onExit();
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
                                <ButtonIcon name="Edit" onClick={() => setShowOverlay(true)} className="font-light text-sm" imageUrl={getEnvironmentLink("assets/icons/forms/edit.svg")} />
                                <ButtonIcon name="Delete" onClick={() => handleDelete(contactMail)} className="font-light text-sm" imageUrl={getEnvironmentLink("assets/icons/forms/trash.svg")} />
                            </div>
                        </div>}
                        {email && <p className="text-3xl font-light">{info.name}</p>}
                    </div>
                </div>
                <Section title={"Mail address"} value={info.mail} colorClass="text-blue-500" />
                <Section title={"Phone"} value={info.phone} />
            </div>
            {email && <MainActionIcon
                url={getEnvironmentLink("assets/icons/contacts/more.svg")}
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