import NameIcon from "../icons/NameIcon";
import {Link} from "react-router-dom";

const ContactLetterList = ({ letter, list }) => {
    return (
        <div className="w-full">
            <div className="border-b border-gray-400 pl-4 py-4">
                {letter.toUpperCase()}
            </div>
            <div>
                {list.sort((a, b) => a.name > b.name)
                    .map((info, i) => <div key={i} className="py-4">
                        <Link to={`/contact-info/${info.mail}`} className="flex space-x-4">
                            <NameIcon name={info.name} />
                            <div className="flex flex-col">
                                <p>{info.name}</p>
                                <p className="text-blue-400 text-sm">{info.mail}</p>
                            </div>
                        </Link>
                    </div>)}
            </div>
        </div>
    );
}

export default ContactLetterList;