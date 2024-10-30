import { useState } from 'react';
import IconInput from '../base/IconInput';
import NameIcon from '../icons/NameIcon';
import './Overlay.css';

const OverlayFormInput = ({ value, iconUrl, placeholder, onChange }) => (
    <IconInput value={value} iconUrl={iconUrl}
        placeholder={placeholder}
        onChange={onChange}
        className="input-contact" containerClassName="input-container" />
);

const BaseContactOverlay = ({ onSubmit, onExit, title, flavorText, isEditing, name = "", mail = "", phone = "" }) => {
    const [inputName, setName] = useState(name);
    const [inputMail, setMail] = useState(mail);
    const [inputPhone, setPhone] = useState(phone);

    return (
        <div className="bg-opacity-50 bg-white mask">
            <div className="p-4 absolute top-20 z-30 text-white right-10 cursor-pointer" onClick={onExit}>
                X
            </div>
            <div className="rounded-2xl flex flex-col items-center mx-8 my-20 shadow-lg overlay bg-white box-border">
                <div className="h-2/5 flex flex-col w-full space-y-2 items-center text-white justify-center bg-blue-600 rounded-t-2xl">
                    <p className='font-bold text-4xl'>{title}</p>
                    <p className='font-light'>{flavorText}</p>
                </div>
                <form className='flex flex-col items-center space-y-4 px-6 py-12'>
                    <OverlayFormInput value={inputName} iconUrl="./assets/icons/forms/person.svg" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <OverlayFormInput value={inputMail} iconUrl="./assets/icons/forms/mail.svg" placeholder="Mail address" onChange={e => setMail(e.target.value)} />
                    <OverlayFormInput value={inputPhone} iconUrl="./assets/icons/forms/phone.svg" placeholder="Phone number" onChange={e => setPhone(e.target.value)} />
                    {isEditing
                        ? <div className='flex space-x-4'>
                            <button className='rounded bg-white p-2 mt-4'>Delete</button>
                            <button className='rounded bg-blue-500 text-white p-2 mt-4'>Save V</button>
                        </div>
                        : <button className='rounded bg-blue-500 text-white p-2 mt-4'>Create contact V</button>
                    }
                </form>
                <div className='center-icon bg-gray-300'>
                    {isEditing && inputName.trim() !== ""
                        ? <NameIcon name={inputName} large />
                        : <img alt="Person icon"
                            src="./assets/icons/contacts/person.svg" />
                    }
                </div>
            </div>
        </div>
    );
}

export default BaseContactOverlay;