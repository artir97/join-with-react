import {useState} from "react";
import NameIcon from "./NameIcon";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const [searchContact, setSearchContact] = useState('');
    const contacts = [
        { name: "Artir Guri", mail: "artir.guri@outlook.de", phone: "+49 160 93885857"},
        { name: "Tatiana Wolf", mail: "wolf@gmail.com", phone: "+49 2222 22 222 2" },
        { name: "John Doe", mail: "john.doe@example.com", phone: "+49 1234 56 789 0" },
        { name: "Alice Smith", mail: "alice.smith@example.com", phone: "+49 9876 54 321 0" },
        { name: "Michael Brown", mail: "michael.brown@example.com", phone: "+49 5555 55 555 5" },
        { name: "Emily Davis", mail: "emily.davis@example.com", phone: "+49 4444 44 444 4" },
        { name: "Daniel Garcia", mail: "daniel.garcia@example.com", phone: "+49 3333 33 333 3" },
        { name: "Sophie Martinez", mail: "sophie.martinez@example.com", phone: "+49 8888 88 888 8" },
        { name: "James Wilson", mail: "james.wilson@example.com", phone: "+49 7777 77 777 7" },
        { name: "Charlotte Lee", mail: "charlotte.lee@example.com", phone: "+49 6666 66 666 6" },
        { name: "Lucas Young", mail: "lucas.young@example.com", phone: "+49 1111 11 111 1" },
        { name: "Olivia Taylor", mail: "olivia.taylor@example.com", phone: "+49 1234 22 789 3" },
        { name: "David Harris", mail: "david.harris@example.com", phone: "+49 5678 44 123 9" },
        { name: "Mia Clark", mail: "mia.clark@example.com", phone: "+49 4321 55 678 0" },
        { name: "Henry Walker", mail: "henry.walker@example.com", phone: "+49 8765 33 987 6" },
        { name: "Sophia King", mail: "sophia.king@example.com", phone: "+49 5432 11 210 4" },
        { name: "Benjamin Allen", mail: "benjamin.allen@example.com", phone: "+49 2109 44 543 8" },
        { name: "Grace Scott", mail: "grace.scott@example.com", phone: "+49 6789 22 543 9" },
        { name: "Ella Green", mail: "ella.green@example.com", phone: "+49 9876 99 432 1" },
        { name: "Alexander Adams", mail: "alexander.adams@example.com", phone: "+49 4567 77 111 0" },
        { name: "Amelia Baker", mail: "amelia.baker@example.com", phone: "+49 3333 88 222 3" },
        { name: "Liam Gonzalez", mail: "liam.gonzalez@example.com", phone: "+49 2121 66 333 5" },
        { name: "Evelyn Perez", mail: "evelyn.perez@example.com", phone: "+49 9090 44 444 4" },
        { name: "Noah Rodriguez", mail: "noah.rodriguez@example.com", phone: "+49 5432 33 123 9" },
        { name: "Ava Turner", mail: "ava.turner@example.com", phone: "+49 3210 55 654 1" },
        { name: "Lucas Hill", mail: "lucas.hill@example.com", phone: "+49 1001 11 789 6" },
        { name: "Isabella Carter", mail: "isabella.carter@example.com", phone: "+49 8888 44 987 0" },
        { name: "Ethan Mitchell", mail: "ethan.mitchell@example.com", phone: "+49 7777 99 876 5" },
        { name: "Mason Roberts", mail: "mason.roberts@example.com", phone: "+49 6565 22 345 2" },
        { name: "Charlotte Evans", mail: "charlotte.evans@example.com", phone: "+49 4545 77 234 4" },
        { name: "Scarlett Cooper", mail: "scarlett.cooper@example.com", phone: "+49 3434 33 678 1" }
    ];

    const [selectedContacts, setSelectedContacts ] = useState([]);

    const [selectTaskIsOpen, setSelectTaskIsOpen] = useState(false);
    const handleClickSelectTaskDropDown = () => {
        setSelectTaskIsOpen((toggleOpen) => !toggleOpen);
    }

    const [selectContactsIsOpen, setSelectContactsIsOpen] = useState(false);
    const handleClickSelectContactsDropDown = () => {
        setSelectContactsIsOpen((toggleOpen) => !toggleOpen);
    }

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchContact.toLowerCase())
    );

    const selectContact = (currentContact) => {
        if (!selectedContacts.some(contact => contact.mail === currentContact.mail)) {
            setSelectedContacts([...selectedContacts, currentContact])
        } else {
            setSelectedContacts(selectedContacts.filter(contact => contact.mail !== currentContact.mail));
        }
    }

    const clearAddTaskForm = () => {
        setTitle('');
        setDescription('');
        setDate('');
        setPriority('');
        setSearchContact('');
        setSelectedContacts([]);
    }

    return (
      <>
        <div className="container-add-task">
            <form className="add-task-form">
                <input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="title-input"
                    type="text"
                    placeholder="Enter a title"
                />

                <label htmlFor="description-input"><b>Description </b>(optional)</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a Description"
                    className="description-input"
                    id="description-input"
                />

                <label><b>Due Date</b></label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <label><b>Priority</b></label>
                <div className="priority-selection">
                    {
                        priority === 'high' &&
                        <SelectedPriority priority={'Urgent'} priorityClass={'priority-high'} priorityImageUrl={'./assets/icon/add-task/prio-high-white.png'} alt={'high priority icon'} setPriority={setPriority}/>
                    }
                    {
                        priority !== 'high' &&
                        <div className="priority-button" onClick={() => {setPriority('high')}}>
                            <div>Urgent</div>
                            <img src={'./assets/icon/add-task/prio-high.png'} alt={"high priority icon"}/>
                        </div>
                    }

                    {
                        priority === 'medium' &&
                        <SelectedPriority priority={'Medium'} priorityClass={'priority-medium'} priorityImageUrl={'./assets/icon/add-task/prio-medium-white.png'} alt={'medium priority icon'} setPriority={setPriority}/>
                    }
                    {
                        priority !== 'medium' &&
                        <div className="priority-button" onClick={() => {setPriority('medium')}}>
                            <div>Medium</div>
                            <img src={'./assets/icon/add-task/prio-medium.png'} alt={"medium priority icon"}/>
                        </div>
                    }

                    {
                        priority === 'low' &&
                        <SelectedPriority priority={'Low'} priorityClass={'priority-low'} priorityImageUrl={'./assets/icon/add-task/prio-low-white.png'} alt={'low priority icon'} setPriority={setPriority}/>
                    }
                    {
                        priority !== 'low' &&
                        <div className="priority-button" onClick={() => {setPriority('low')}}>
                            <div>Low</div>
                            <img src={'./assets/icon/add-task/prio-low.png'} alt={"low priority icon"}/>
                        </div>
                    }
                </div>


                <label><b>Assigned to</b> (optional)</label>
                <div
                     className="flex justify-between items-center w-full h-12 border-b border-gray-300">
                    {
                        !selectContactsIsOpen &&
                        <>
                            <div onClick={handleClickSelectContactsDropDown}>Select contacts to assign</div>
                            <img onClick={handleClickSelectContactsDropDown} src={'./assets/icon/add-task/arrow-drop-down.png'} alt={"arrow pointing down"}/>
                        </>
                    }
                    {
                        selectContactsIsOpen &&
                        <>
                            <input
                                value={searchContact}
                                onChange={(e) => setSearchContact(e.target.value)}
                                type="text"
                                placeholder="search a contact"
                            />
                            <img onClick={handleClickSelectContactsDropDown}
                                 src={'./assets/icon/add-task/arrow-drop-down-up.png'} alt={"arrow pointing up"}/>
                        </>
                    }
                </div>
                {selectContactsIsOpen && <ContactsSelection contacts={filteredContacts} selectContact={selectContact} selectedContacts={selectedContacts} />}

                <label><b>Category</b></label>
                <div onClick={handleClickSelectTaskDropDown}
                     className="flex justify-between items-center w-full h-12 border-b border-gray-300">
                    <div>Select task category</div>
                    {!selectTaskIsOpen && <img src={'./assets/icon/add-task/arrow-drop-down.png'} alt={"arrow pointing down"}/>}
                    {selectTaskIsOpen && <img src={'./assets/icon/add-task/arrow-drop-down-up.png'} alt={"arrow pointing up"}/>}
                </div>
                {selectTaskIsOpen && <SelectTaskDropDown/>}

                <label><b>Subtasks</b> (optional)</label>
                <div className="flex items-center w-full h-12 border-b border-gray-300">
                    <input type="text"/>
                    <img src={'./assets/icon/add-task/plus.png'} alt={"a plus icon"}/>
                </div>

                <div className="buttons-container">
                    <div className="button button-white">
                        <div onClick={clearAddTaskForm}>Clear</div>
                        <img src={'./assets/icon/add-task/clear.png'} alt={"a cross icon"}/>
                    </div>
                    <button onClick={(e) => {e.preventDefault(); console.log('test')}} className="button button-blue">
                        <div>Create Task</div>
                        <img src={'./assets/icon/add-task/check.png'} alt={"a checkmark icon"}/>
                    </button>
                </div>
            </form>
        </div>
      </>
    );
}

const ContactsSelection = ({contacts, selectContact, selectedContacts}) => {
    // contact-selected add this class if a contact is selected
    return (
        <div className="contacts-selection">
            {contacts.map((contact, index) => {
                const isSelected = selectedContacts.some(selected => selected.mail === contact.mail);
                const selectedImg = './assets/icon/add-task/check-button-checked-white.png';
                const defaultImg = './assets/icon/add-task/check-button.png';

                return (
                   <div onClick={() => selectContact(contact)}
                     className={`contact ${isSelected ? 'contact-selected' : ''}`}
                     key={index}>
                    <div className="flex gap-5">
                        <div>
                            <NameIcon name={contact.name}/>
                        </div>
                        <div className="flex items-center">
                            {contact.name}
                        </div>
                    </div>
                    <div>
                        <img src={isSelected ? selectedImg : defaultImg} alt={"empty checkbox"}/>
                    </div>
                </div>
               )
            })}
        </div>
    )
}

const SelectTaskDropDown = () => {
    return (
        <div className="w-full">
            <div className="h-12 flex items-center">Technical Task</div>
            <div className="h-12 flex items-center">User Story</div>
        </div>
    );
}

const SelectedPriority = ({ priority, priorityClass, priorityImageUrl, alt, setPriority }) => {
    return (
        <div onClick={ () => {setPriority('')}} className={"priority-button " + priorityClass}>
            <div>{priority}</div>
            <img src={priorityImageUrl} alt={alt} />
        </div>
    );
}


export default AddTask