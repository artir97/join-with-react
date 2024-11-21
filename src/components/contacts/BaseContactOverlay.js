import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useContactList } from "../../hooks/useContactList";
import UnderlineIconInput from '../base/UnderlineIconInput';
import NameIcon from '../icons/NameIcon';
import ButtonIcon from '../icons/ButtonIcon';

import { capitalize } from '../../tools/format';

import '../base/Overlay.css';
import { getEnvironmentLink } from '../../tools/navigation';


/**
 * Base contact overlay component
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Function to handle form submission. It takes one argument: {name, mail, phone}.
 * @param {Function} props.onExit - Function to handle exit action. Triggered on the X icon.
 * @param {string} props.title - Title of the overlay
 * @param {string} props.flavorText - Additional descriptive text
 * @param {boolean} props.isEditing - Flag indicating if the overlay is in editing mode
 * @param {string} [props.name=""] - Name input value
 * @param {string} [props.mail=""] - Mail input value
 * @param {string} [props.phone=""] - Phone input value
 */
const BaseContactOverlay = ({ onSubmit, onExit, title, flavorText, isEditing, name = "", mail = "", phone = "" }) => {
    const [inputName, setName] = useState(name);
    const [inputMail, setMail] = useState(mail);
    const [inputPhone, setPhone] = useState(phone);
    const { deleteContact } = useContactList();
    const navigateTo = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();

        onSubmit({ name: capitalize(inputName), mail: inputMail.trim(), phone: inputPhone.trim() });
        onExit();
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteContact(mail);
        navigateTo('/contacts');
        onExit();
    }

    return (
        <div className="bg-opacity-50 bg-white mask overflow-x-hidden">
            <div className="rounded-2xl flex flex-col items-center mx-8 my-20 shadow-lg overlay fixed-h-overlay bg-white box-border">
                <div className="h-2/5 flex flex-col w-full text-white space-y-16 p-4 bg-blue-600 rounded-t-2xl">
                    <div className="flex flex-row-reverse w-full" onClick={onExit}>
                        <img src={getEnvironmentLink("assets/icons/forms/close-white.svg")} alt="Close icon" />
                    </div>
                    <div className='flex flex-col space-y-2 items-center justify-center'>
                        <p className='font-bold text-4xl'>{title}</p>
                        <p className='font-light'>{flavorText}</p>
                    </div>
                </div>
                <form className='flex flex-col items-center space-y-4 w-full px-6 py-12' onSubmit={handleSubmit}>
                    <UnderlineIconInput required value={inputName} iconUrl={getEnvironmentLink("assets/icons/forms/person.svg")} placeholder="Name" onChange={e => setName(e.target.value)} />
                    <UnderlineIconInput required value={inputMail} type="email" iconUrl={getEnvironmentLink("assets/icons/forms/mail.svg")} placeholder="Mail address" onChange={e => setMail(e.target.value)} />
                    <UnderlineIconInput required value={inputPhone} iconUrl={getEnvironmentLink("assets/icons/forms/phone.svg")} placeholder="Phone number" onChange={e => setPhone(e.target.value)} />
                    {isEditing
                        ? <div className='flex space-x-4 mt-8'>
                            <button className='rounded bg-white p-2 mt-4' onClick={handleDelete}>Delete</button>
                            <ButtonIcon className='rounded flex space-x-6 bg-blue-500 text-white p-2 mt-4'
                                type="submit"
                                name="Save"
                                imageUrl={getEnvironmentLink("assets/icons/forms/check.svg")}
                                side='right' />
                        </div>
                        : <ButtonIcon className='rounded flex space-x-2 bg-blue-500 text-white p-2 mt-8'
                            name={"Create contact"}
                            type="submit"
                            imageUrl={getEnvironmentLink("assets/icons/forms/check.svg")}
                            side='right'
                        />
                    }
                </form>
                <div className='center-icon bg-gray-300'>
                    {isEditing && inputName.trim() !== ""
                        ? <NameIcon name={inputName} large />
                        : <img alt="Person icon"
                            src={getEnvironmentLink("assets/icons/contacts/person.svg")} />
                    }
                </div>
            </div>
        </div>
    );
}

export default BaseContactOverlay;