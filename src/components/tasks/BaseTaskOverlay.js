import {useNavigate, useParams} from "react-router-dom";
import {useTasks} from "../../hooks/useDataContext";
import {useContactList} from "../../hooks/useContactList";
import React, {useState} from "react";
import {getStatusFromIndex} from "../../tools/status";
import {ReactSVG} from "react-svg";
import {handleColorInjection, handleRotateInjection, handleSizeInjection} from "../../tools/svg";
import UnderlineIconInput from "../base/UnderlineIconInput";
import NameIcon from "../icons/NameIcon";
import Separator from "../base/Separator";

const BaseTaskOverlay = (
    { name = "", description = "",date = "", selectedPriority = "", taskCategory = "Select task category",
        assigneesArr = [], subtasksArr = []}
) => {
    const navigate = useNavigate();
    const { statusIndex } = useParams();

    const { addTask } = useTasks();
    const { list: contacts } = useContactList();

    const [title, setTitle] = useState(name);
    const [inputDescription, setDescription] = useState(description);
    const [inputDate, setDate] = useState(date);
    const [priority, setPriority] = useState(selectedPriority);
    const [searchContact, setSearchContact] = useState('');
    const [selectedContacts, setSelectedContacts] = useState(assigneesArr);
    const [subtask, setSubtask] = useState('');
    const [subtasks, setSubtasks] = useState(subtasksArr);
    const [category, setCategory] = useState(taskCategory);
    const [selectTaskIsOpen, setSelectTaskIsOpen] = useState(false);
    const handleClickSelectTaskDropDown = () => {
        setSelectTaskIsOpen((toggleOpen) => !toggleOpen);
    }
    const [editSubtaskValue, setEditSubtaskValue] = useState('');

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

    const addSubtask = (name) => {
        if (!subtasks.some(s => s.name === name)) {
            setSubtasks([...subtasks, { name, done: false, editOpen: false }]);
            setSubtask('');
        } else {
            console.error('you can\'t add the same subtask twice');
        }
    }

    const deleteSubtask = (index) => {
        subtasks.splice(index, 1);
        setSubtasks([...subtasks]);
    }

    const editSubtask = (index) => {
        if (subtasks.some(subtask => subtask.editOpen === true)) {
            console.error('you can\'t edit two subtasks at once');
        } else {
            subtasks[index].editOpen = true;
            setEditSubtaskValue(subtasks[index].name);
            setSubtasks([...subtasks]);
        }
    }

    const cancelEdit = (index) => {
        subtasks[index].editOpen = false;
        setSubtasks([...subtasks]);
    }

    const acceptEdit = (index, value) => {
        subtasks[index].name = value;
        subtasks[index].editOpen = false;
        setSubtasks([...subtasks]);

    }

    const selectTask = (category) => {
        setCategory(category);
        setSelectTaskIsOpen((toggleOpen) => !toggleOpen);
    }

    const clearAddTaskForm = () => {
        setTitle('');
        setDescription('');
        setDate('');
        setPriority('');
        setSearchContact('');
        setSelectedContacts([]);
        setSubtasks([]);
    }

    const handleAddTaskSubmit = (e) => {
        e.preventDefault();

        addTask({
            category,
            name: title,
            inputDescription,
            assignees: selectedContacts,
            subtasks: subtasks,
            dueDate: inputDate,
            priority,
            status: getStatusFromIndex(statusIndex)
        });
        clearAddTaskForm();
        navigate("/tasks");
    }
    return (
        <>
            <div className="container-add-task w-full">
                <form onSubmit={handleAddTaskSubmit} className="add-task-form">
                    <input
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="text-2xl border-b no-icon-input"
                        type="text"
                        placeholder="Enter a title"
                    />

                    <label htmlFor="description-input"><b>Description </b>(optional)</label>
                    <textarea
                        value={inputDescription}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter a description"
                        className="description-input border-2"
                    />

                    <label><b>Due Date</b></label>
                    <input
                        required
                        type="date"
                        value={inputDate}
                        className={`no-icon-input font-light`}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <label><b>Priority</b></label>
                    <div className="priority-selection">
                        {
                            ['urgent', 'medium', 'low'].map((p, index) => (
                                <div key={index} onClick={() => setPriority(priority === p ? '' : p)} className={`priority-button ${priority === p ? `priority-${p}` : ""}`}>
                                    <div className="capitalize">{p}</div>
                                    <ReactSVG src={`./assets/icons/priorities/${p}.svg`} beforeInjection={svg => handleColorInjection(svg, 'white', () => priority === p)} />
                                </div>
                            ))
                        }
                    </div>

                    <label><b>Assigned to</b> (optional)</label>
                    <div className="w-full h-12">
                        {
                            !selectContactsIsOpen &&
                            <div className="border-b border-gray-300 w-full flex justify-between items-center p-2">
                                <div onClick={handleClickSelectContactsDropDown}>Select contacts to assign</div>
                                <ReactSVG src="./assets/icons/forms/arrow-drop-down.svg"
                                          className="add-task-icon"
                                          onClick={handleClickSelectContactsDropDown} />
                            </div>
                        }
                        {
                            selectContactsIsOpen && <>
                                <UnderlineIconInput
                                    value={searchContact}
                                    onChange={(e) => setSearchContact(e.target.value)}
                                    placeholder="Enter a name..."
                                    icon={<ReactSVG src="./assets/icons/forms/arrow-drop-down.svg"
                                                    onClick={handleClickSelectContactsDropDown}
                                                    className="add-task-icon"
                                                    beforeInjection={svg => handleRotateInjection(svg, 180)} />}
                                />
                            </>
                        }
                    </div>
                    {
                        !selectContactsIsOpen &&
                        <div className="selected-contacts-list">
                            {selectedContacts.map((selectedContact, index) => (
                                <NameIcon key={index} name={selectedContact.name} />
                            ))}
                        </div>
                    }
                    {selectContactsIsOpen && <ContactsSelection contacts={filteredContacts} selectContact={selectContact} selectedContacts={selectedContacts} />}

                    <label><b>Category</b></label>
                    <div onClick={handleClickSelectTaskDropDown}
                         className="flex justify-between items-center w-full h-12 border-b p-2 border-gray-300">
                        <div>{category}</div>
                        <ReactSVG src="./assets/icons/forms/arrow-drop-down.svg"
                                  className="add-task-icon"
                                  beforeInjection={svg => handleRotateInjection(svg, 180, () => selectTaskIsOpen)} />
                    </div>
                    {selectTaskIsOpen && <SelectTaskDropDown selectTask={selectTask} className="p-2" />}

                    <label><b>Subtasks</b> (optional)</label>
                    <UnderlineIconInput
                        value={subtask} onChange={(e) => setSubtask(e.target.value)}
                        placeholder="Add new subtask"
                        icon={<ReactSVG onClick={() => addSubtask(subtask)}
                                        className="add-task-icon"
                                        src={'./assets/icons/forms/plus.svg'} />}
                    />
                    <div className="w-full flex flex-col justify-between pr-4 pl-6 pt-4 space-y-4">
                        {subtasks.map((subtask, index) => (
                            <React.Fragment key={index}>
                                <div className="flex justify-between">
                                    {
                                        subtasks[index].editOpen &&
                                        <div className="flex items-center w-full h-12 border-b border-gray-300">
                                            <input value={editSubtaskValue} className='w-full' onChange={(e) => setEditSubtaskValue(e.target.value)} />
                                            <div className="flex items-center">
                                                <ReactSVG onClick={() => cancelEdit(index)}
                                                          src={'./assets/icons/forms/close-blue.svg'}
                                                          className="add-task-icon"
                                                          beforeInjection={svg => handleSizeInjection(svg, 'lg')} />
                                                <Separator />
                                                <ReactSVG onClick={() => acceptEdit(index, editSubtaskValue)}
                                                          src={'./assets/icons/forms/check.svg'}
                                                          className="add-task-icon"
                                                          beforeInjection={svg => {
                                                              handleSizeInjection(svg, 'lg');
                                                              handleColorInjection(svg, '#3b82f6')
                                                          }}
                                                />
                                            </div>
                                        </div>
                                    }


                                    {
                                        !subtasks[index].editOpen &&
                                        <>
                                            <li>{subtask.name}</li>
                                            <div className="flex">
                                                <img onClick={() => editSubtask(index)}
                                                     className="add-task-icon"
                                                     src={'./assets/icons/forms/edit.svg'} alt={"Edit icon"} />
                                                <Separator />
                                                <img onClick={() => deleteSubtask(index)}
                                                     className="add-task-icon"
                                                     src={'./assets/icons/forms/trash.svg'} alt={"Delete icon"} />
                                            </div>
                                        </>

                                    }
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="buttons-container">
                        <div className="button button-white flex items-center space-x-2">
                            <div onClick={clearAddTaskForm}>Clear</div>
                            <ReactSVG src={'./assets/icons/forms/close-white.svg'}
                                      beforeInjection={svg => handleColorInjection(svg, 'black')} />
                        </div>
                        <button type="submit" className="button button-blue flex items-center space-x-2">
                            <div>Create Task</div>
                            <img src={'./assets/icons/forms/check.svg'} alt={"Check icon"} />
                        </button>
                    </div>
                </form >
            </div >
        </>
    );
}

const ContactsSelection = ({ contacts, selectContact, selectedContacts }) => {
    return (
        <div className="contacts-selection">
            {(contacts.sort((a, b) => a.name.localeCompare(b.name)))
                .map((contact, index) => {
                    const isSelected = selectedContacts.some(selected => selected.mail === contact.mail);
                    const selectedImg = './assets/icons/forms/checkbox-checked.svg';
                    const defaultImg = './assets/icons/forms/checkbox-empty.svg';

                    return (
                        <div onClick={() => selectContact(contact)}
                             className={`contact ${isSelected ? 'contact-selected' : ''}`}
                             key={index}>
                            <div className="flex gap-5 items-center">
                                <NameIcon name={contact.name} />
                                {contact.name}
                            </div>
                            <div>
                                <ReactSVG src={isSelected ? selectedImg : defaultImg}
                                          beforeInjection={svg => handleColorInjection(svg, 'white', () => isSelected, 'stroke')} />
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

const SelectTaskDropDown = ({ selectTask, className }) => {
    return (
        <div className={`w-full ${className}`}>
            <div onClick={() => { selectTask('Technical Task') }} className="h-12 flex items-center">Technical Task</div>
            <div onClick={() => { selectTask('User Story') }} className="h-12 flex items-center">User Story</div>
        </div>
    );
}

export default BaseTaskOverlay;