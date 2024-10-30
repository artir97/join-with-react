import { useEffect, useState } from "react";
import StatusTasks from "../components/tasks/StatusTasks";
import IconInput from "../components/base/IconInput";

const task = {
    category: "Technical task",
    name: "Find a remote job",
    description: "We're gonna roll in moneeeey",
    assignees: [{
        name: 'Artir Guri',
        mail: 'xxx',
        phone: '...'
    }, {
        name: 'Guy Luong',
        mail: 'xxx',
        phone: '...'
    }],
    subtasks: [{ name: "test", done: false }, { name: "test2", done: true }],
    priority: 'low',
    status: 'In progress'
};

const status = ['To do', 'In progress', 'Awaiting feedback', 'Done'];

const Tasks = () => {
    const [tasks, setTasks] = useState([{ ...task, id: 0 }, { ...task, id: 1 },
    { ...task, status: "Awaiting feedback", id: 2 }, { ...task, status: "Awaiting feedback", id: 3 }, { ...task, status: "Awaiting feedback", id: 4 },
    { ...task, status: "Done", id: 5 }
    ]);
    const [search, setSearch] = useState("");
    const [sortedTasks, setSortedTasks] = useState([]);

    useEffect(() => {
        setSortedTasks(tasks.filter(t => t.name.toLowerCase().includes(search.trim().toLowerCase())).reduce((acc, t) => {
            if (!acc[t.status]) {
                acc[t.status] = [];
            }
            acc[t.status].push(t);
            return acc;
        }, {}));
    }, [tasks, search]);

    return (
        <div className="page-content overflow-y-scroll pt-4">
            <div className="flex flex-col space-y-4">
                {/** Search bar */}
                <IconInput
                    containerClassName="border border-gray-500 rounded-lg" className="outline-none px-4"
                    iconUrl="./assets/icons/forms/search.svg"
                    placeholder="Find task..."
                    onChange={e => setSearch(e.target.value)}/>

                {/** Sorted cards */}
                {status.map((s, i) => <StatusTasks
                    key={i}
                    status={s}
                    tasks={(sortedTasks[s]) ? sortedTasks[s] : []}
                    updateTask={(task) => setTasks(tasks => [...tasks.filter(t => t.id !== task.id), { ...task, status: s }])}
                />)}
            </div>
        </div>
    );
}

export default Tasks;