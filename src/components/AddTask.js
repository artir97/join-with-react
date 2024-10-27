import {useState} from "react";
import NameIcon from "./NameIcon";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const contacts = [
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
                    <div className="priority-button" onClick={() => {setPriority('high')}}>
                        <div>Urgent</div>
                        <img src={'./assets/icon/add-task/prio-high.png'} alt={"high priority icon"}/>
                    </div>
                    <div className="priority-button" onClick={() => {setPriority('medium')}}>
                        <div>Medium</div>
                        <img src={'./assets/icon/add-task/prio-medium.png'} alt={"medium priority icon"}/>
                    </div>
                    <div className="priority-button" onClick={() => {setPriority('low')}}>
                        <div>Low</div>
                        <img src={'./assets/icon/add-task/prio-low.png'} alt={"low priority icon"}/>
                    </div>
                </div>

                <label><b>Assigned to</b> (optional)</label>
                <input/>
                <div className="contacts-selection">
                    {contacts.map((contact, index) => (
                        <div className="contact" key={index}>
                            <div className="flex gap-5">
                                <div>
                                    <NameIcon name={contact.name} />
                                </div>
                                <div className="flex items-center">
                                    {contact.name}
                                </div>
                            </div>
                            <div>
                                <img src={'./assets/icon/add-task/check-button.png'} alt={"empty checkbox"}/>
                            </div>
                        </div>
                    ))}
                </div>

                <label><b>Category</b></label>
                <div className="flex justify-between items-center w-full h-12 border-b border-gray-300">
                    <div>Select task category</div>
                    <img src={'./assets/icon/add-task/arrow-drop-down.png'} alt={"arrow pointing down"}/>
                </div>
                <div className="w-full">
                    <div className="h-12 flex items-center">Technical Task</div>
                    <div className="h-12 flex items-center">User Story</div>
                </div>

                <label><b>Subtasks</b> (optional)</label>
                <div className="flex items-center w-full h-12 border-b border-gray-300">
                    <input type="text"/>
                    <img src={'./assets/icon/add-task/plus.png'} alt={"a plus icon"}/>
                </div>
                <div>

                </div>
            </form>
        </div>
      </>
    );
}

export default AddTask