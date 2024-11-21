import MobileSwitch from "../components/base/MobileSwitch";
import BigTaskCounter from "../components/summary/BigTaskCounter";
import TaskCounter from "../components/summary/TaskCounter";
import UrgentTaskCounter from "../components/summary/UrgentTaskCounter";
import {useTasks} from "../hooks/useDataContext";
import { getEnvironmentLink } from "../tools/navigation";


const MobileSummary = () => (
    <div className="flex flex-col items-center space-y-4 p-4">
        <UrgentTaskCounter count={1} date={"November 27, 2024"} />
        <BigTaskCounter count={1} />

        <div className="flex flex-col w-full space-y-4 justify-center">
            <div className="space-x-4 flex w-full">
                <TaskCounter iconUrl={getEnvironmentLink("assets/icons/summary/on-board.svg")} name={"Tasks on board"} count={5} />
                <TaskCounter iconUrl={getEnvironmentLink("assets/icons/summary/in-progress.svg")} name={"Tasks in progress"} count={2} />
            </div>
            <div className="space-x-4 flex w-full">
                <TaskCounter iconUrl={getEnvironmentLink("assets/icons/summary/awaiting-feedback.svg")} name={"Awaiting feedback"} count={2} />
                <TaskCounter iconUrl={getEnvironmentLink("assets/icons/summary/tasks-done.svg")} name={"Tasks done"} count={5} />
            </div>
        </div>
    </div>
);

const getTimeOfDay = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 4 && hours < 12) {
        return 'morning';
    } else if (hours >= 12 && hours < 18) {
        return 'afternoon';
    } else {
        return 'evening';
    }
}

const getTasks = (status, taskList) => {
    switch (status) {
        case "To do":
            return taskList.filter(task => task.status === "To do");
        case "In progress":
            return taskList.filter(task => task.status === "In progress");
        case "Awaiting feedback":
            return taskList.filter(task => task.status === "Awaiting feedback");
        case "Done":
            return taskList.filter(task => task.status === "Done");
        default:
            return taskList;
    }
};

const getUrgentTasks = (taskList, priority = "urgent") => {
    return taskList.filter(task => task.priority === priority);
};

const DesktopSummary = ({ name = "", taskList }) => (
    <div className="flex flex-col items-center space-y-10 p-4">
        {name
            ? <h1 className="text-5xl font-extralight">Good {getTimeOfDay()}, <span className="text-blue-500 font-bold">{name}</span></h1>
            : <h1 className="text-5xl font-bold">Good {getTimeOfDay()}</h1>}
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <UrgentTaskCounter count={getUrgentTasks(taskList).length} date={"November 27, 2024"} className="col-span-3" />
            <TaskCounter iconUrl="/assets/icons/summary/on-board.svg" name={"Tasks on board"} count={taskList.length} />

            <BigTaskCounter count={getTasks('To do', taskList).length} />
            <TaskCounter iconUrl="/assets/icons/summary/in-progress.svg" name={"Tasks in progress"} count={getTasks('In progress', taskList).length} />
            <TaskCounter iconUrl="/assets/icons/summary/awaiting-feedback.svg" name={"Awaiting feedback"} count={getTasks('Awaiting feedback', taskList).length} />
            <TaskCounter iconUrl="/assets/icons/summary/tasks-done.svg" name={"Tasks done"} count={getTasks('Done', taskList).length} />
        </div>
    </div>
);

const Summary = () => {
    const { taskList } = useTasks();

    return (
        <div className="page-content flex items-center justify-center">
            <MobileSwitch
                mobileComponent={<MobileSummary />}
                desktopComponent={<DesktopSummary name="Artir Guri" taskList={taskList}/>} />
        </div>
    );
}

export default Summary;