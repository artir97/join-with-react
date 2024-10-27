import IconInput from '../base/IconInput';
import './Overlay.css';

const AddContactOverlay = ({ onExit }) => {
    return (
        <div className="bg-opacity-50 bg-white mask">
            <div className="p-4 absolute top-20 text-white right-10" onClick={onExit}>
                X
            </div>
            <div className="rounded-2xl flex flex-col items-center mx-8 my-20 shadow-lg overlay bg-white box-border">
                <div className="h-2/5 flex flex-col w-full space-y-2 items-center text-white justify-center bg-blue-600 rounded-t-2xl">
                    <p className='font-bold text-4xl'>Add contact</p>
                    <p className='font-light'>Tasks are better with a team!</p>
                </div>
                <div className='size-32 bg-gray-300 outline outline-white rounded-full flex justify-center items-center'>
                    <img alt="Person icon"
                        src="./assets/icons/contacts/person.svg" />
                </div>
                <form className='flex flex-col items-center space-y-4 p-6'>
                    <IconInput className="input-contact" iconUrl="" placeholder="Name"/>
                    <IconInput className="input-contact" iconUrl="" placeholder="Mail address"/>
                    <IconInput className="input-contact" iconUrl="" placeholder="Phone number"/>
                    <button className='rounded bg-blue-500 text-white p-2 mt-4'>Create contact V</button>
                </form>
            </div>
        </div>
    );
}

export default AddContactOverlay;