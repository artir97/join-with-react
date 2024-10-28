import { useState } from "react";
import NameIcon from "../components/contacts/NameIcon";
import MainActionIcon from "../components/base/MainActionIcon";
import EditContactOverlay from "../components/contacts/EditContactOverlay";

const Section = ({ title, value, colorClass = "" }) => (
    <div className="flex flex-col space-y-2">
        <h3 className={"font-semibold"}>{title}</h3>
        <p className={`font-light ${colorClass}`}>{value}</p>
    </div>
);

const ContactInfo = ({ name, mail, phone }) => {
    // const {name} = useParams();
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <>
            <div className="page-content flex flex-col space-y-4 p-4">
                <div>
                    <div className="flex items-center">
                        <h2 className="font-bold flex-1">Contact information</h2>
                        <span className="p-4 text-blue-500 cursor-pointer">{"<"}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NameIcon name={name} large className={"border border-white shadow-md"} />
                        <p className="text-3xl font-light">{name}</p>
                    </div>
                </div>
                <Section title={"Mail address"} value={mail} colorClass="text-blue-500" />
                <Section title={"Phone"} value={phone} />
            </div>
            <MainActionIcon
                url="./assets/icons/contacts/more.svg"
                name={"Add contact icon"}
                onClick={() => setShowOverlay(true)} />
            {showOverlay && <EditContactOverlay
                onExit={() => setShowOverlay(false)}
                name={name}
                mail={mail}
                phone={phone}
            />}
        </>
    );
}

export default ContactInfo;