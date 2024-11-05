import MobileSwitch from "../components/base/MobileSwitch";
import BigTaskCounter from "../components/summary/BigTaskCounter";
import TaskCounter from "../components/summary/TaskCounter";
import UrgentTaskCounter from "../components/summary/UrgentTaskCounter";

const MobileSummary = () => (
    <div className="flex flex-col items-center space-y-4 p-4">
        <UrgentTaskCounter count={1} date={"November 27, 2024"} />
        <BigTaskCounter count={1} />

        <div className="flex flex-col w-full space-y-4 justify-center">
            <div className="space-x-4 flex w-full">
                <TaskCounter iconUrl="/assets/icons/summary/on-board.svg" name={"Tasks on board"} count={5} />
                <TaskCounter iconUrl="/assets/icons/summary/in-progress.svg" name={"Tasks in progress"} count={2} />
            </div>
            <div className="space-x-4 flex w-full">
                <TaskCounter iconUrl="/assets/icons/summary/awaiting-feedback.svg" name={"Awaiting feedback"} count={2} />
                <TaskCounter iconUrl="/assets/icons/summary/tasks-done.svg" name={"Tasks done"} count={5} />
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

const DesktopSummary = ({ name = "" }) => (
    <div className="flex flex-col items-center space-y-10 p-4">
        {name
            ? <h1 className="text-5xl font-extralight">Good {getTimeOfDay()}, <span className="text-blue-500 font-bold">{name}</span></h1>
            : <h1 className="text-5xl font-bold">Good {getTimeOfDay()}</h1>}
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <UrgentTaskCounter count={1} date={"November 27, 2024"} className="col-span-3" />
            <TaskCounter iconUrl="/assets/icons/summary/on-board.svg" name={"Tasks on board"} count={5} />

            <BigTaskCounter count={1} />
            <TaskCounter iconUrl="/assets/icons/summary/in-progress.svg" name={"Tasks in progress"} count={2} />
            <TaskCounter iconUrl="/assets/icons/summary/awaiting-feedback.svg" name={"Awaiting feedback"} count={2} />
            <TaskCounter iconUrl="/assets/icons/summary/tasks-done.svg" name={"Tasks done"} count={5} />
        </div>
    </div>
);

const Summary = () => {
    return (
        <div className="page-content flex items-center justify-center">
            <MobileSwitch
                mobileComponent={<MobileSummary />}
                desktopComponent={<DesktopSummary name="Artir Guri"/>} />
        </div>
    );
}

export default Summary;