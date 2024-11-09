import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { handleColorInjection } from "../tools/svg";
import { getStatusList } from "../tools/status";

import {useTasks} from "../hooks/useDataContext";

import StatusTasks from "../components/tasks/StatusTasks";
import IconInput from "../components/base/IconInput";
import TaskInfoOverlay from "../components/tasks/TaskInfoOverlay";
import MobileSwitch from "../components/base/MobileSwitch";


const task = {
    category: "Technical Task",
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
    dueDate: "31/12/2024",
    priority: 'low',
    status: 'In progress'
};

const Tasks = () => {
    const { editTask, taskList } = useTasks();
    const statusList = getStatusList();

    const [tasks, setTasks] = useState([{ ...task, id: 0 }, { ...task, id: 1 },
    { ...task, status: "Awaiting feedback", id: 2 }, { ...task, status: "Awaiting feedback", id: 3 }, { ...task, status: "Awaiting feedback", id: 4 },
    { ...task, status: "Done", id: 5 }
    ]);
    const [search, setSearch] = useState("");
    const [sortedTasks, setSortedTasks] = useState([]);
    const [overlayTask, setOverlayTask] = useState(null);

    /**
     * Videos #14+: `useEffect` is used when you want to use a callback any time a state changes.
     * 
     * `useEffect` takes two arguments: the callback and a list of dependencies.
     * 
     * In any case, at the first render, `useEffect` will be called.
     * Then, it watches for any change in the list of dependencies (which can be empty: in that case,
     * it's never called again), and if it detects a change, the callback is used again.
     * 
     * Examples of main uses:
     * - Empty dependencies: Fetching data. You want it to happen only once when you render a component.
     * - Here, we rerender the tasks if the tasks are modified (on status changes), because they need
     * to be sorted first before displaying, or if the search bar content is changed.
     * - Saving data (Local storage, *Firebase*): watch for the data you want to save, and write any change
     * that happens.
     * 
     * Note: The more you can do things without useEffect, the better it is.
     * You can get easily confused with too much useEffects.
     */
    useEffect(() => {
        const filterByNameOrPerson = t => (
            t.name.toLowerCase().includes(search.trim().toLowerCase())
            || t.assignees.some(a => a.name.toLowerCase().includes(search.trim().toLowerCase())));

        /**
         * `reduce` : This sorts the tasks array into an object like this:
         * {
         *     "In progress": [task1, task2, ...],
         *     "Awaiting feedback": [task3, task4, ...],
         *     ...
         * }
         * 
         * The first argument is a function that takes two arguments:
         * - acc : the object built, also called the **accumulator**,
         * - t : representing the object currently dealt with. (t is for task btw)
         * I'll go over the contents of the function in a bit.
         * 
         * The second argument is the initializer.
         * An initial state for the object we want to build is... an empty object: {}
         * 
         * Now for the function. Since we want to have an array of items for each 'status',
         * and the initial state is {} (empty object), we need to create an empty array if we didn't encounter
         * a specific status.
         * Then it's just adding the task to the array.
         * And finally, it needs to return the modified accumulator.
         * 
         * The function given as the first argument is applied for all elements in the array (here it's the
         * filtered tasks), akin to the methods of filter, map, etc.
         * 
         * For a random information: `reduce` is the strongest function of all this group,
         * we can write any of the other functions (map, filter, forEach, etc.) with reduce.
         * But that's another story. 
         */
        setSortedTasks(taskList.filter(filterByNameOrPerson).reduce((acc, t) => {
            if (!acc[t.status]) {
                acc[t.status] = [];
            }
            acc[t.status].push(t);
            return acc;
        }, {}));
    }, [taskList, search]);

    const handleDragAndDrop = (task, newStatus) => {
        task = {...task, status: newStatus};
        editTask(task);
    }

    return (
        <>
            <div className="page-content overflow-y-scroll pt-4">
                <div className="flex flex-col space-y-4">
                    {/** Search bar */}
                    <div className="flex space-x-4 items-center">
                        <IconInput
                            containerClassName="border border-gray-500 rounded-lg" className="outline-none px-4"
                            iconUrl="./assets/icons/forms/search.svg"
                            placeholder="Find task..."
                            onChange={e => setSearch(e.target.value)} />
                        <MobileSwitch desktopComponent={
                            <Link to="/addTask" className="px-2 py-1 rounded bg-blue-500 text-white flex space-x-2 items-center">
                                <span>Add task</span>
                                <ReactSVG src="./assets/icons/forms/plus.svg"
                                    beforeInjection={svg => handleColorInjection(svg, "white")} />
                            </Link>} />
                    </div>

                    {/** Sorted cards */}
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-6 lg:flex-row lg:overflow-x-scroll lg:scroll-p-5 lg:snap-x">
                        {statusList.map((s, i) => <StatusTasks
                            key={i}
                            status={s}
                            tasks={(sortedTasks[s]) ? sortedTasks[s] : []}
                            updateTask={(task) => handleDragAndDrop(task, s)}
                            showOverlay={setOverlayTask}
                        />)}
                    </div>
                </div>
            </div>
            {/** Task Info Overlay */}
            {overlayTask && <TaskInfoOverlay task={task} onExit={() => setOverlayTask(null)} />}
        </>
    );
}

export default Tasks;