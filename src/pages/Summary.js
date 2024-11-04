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

const DesktopSummary = () => (
    <div className="flex flex-col items-center space-y-4 p-4">
        <h1 className="text-2xl font-bold">Welcome !</h1>
        <div className="flex w-full space-x-4 align-center">
            <UrgentTaskCounter count={1} date={"November 27, 2024"} className="flex-3" />
            <TaskCounter iconUrl="/assets/icons/summary/on-board.svg" name={"Tasks on board"} className="flex-1" count={5} />
        </div>
        <div className="flex w-full space-x-4 align-center">
            <BigTaskCounter count={1} className="flex-1"/>
            <TaskCounter iconUrl="/assets/icons/summary/in-progress.svg" name={"Tasks in progress"} count={2} className="flex-1" />
            <TaskCounter iconUrl="/assets/icons/summary/awaiting-feedback.svg" name={"Awaiting feedback"} count={2} className="flex-1" />
            <TaskCounter iconUrl="/assets/icons/summary/tasks-done.svg" name={"Tasks done"} count={5} className="flex-1"/>
        </div>
    </div>
);

const Summary = () => {
    return (
        <div className="page-content flex items-center justify-center">
            <MobileSwitch
                mobileComponent={<MobileSummary />}
                desktopComponent={<DesktopSummary />} />
        </div>
    );
}

export default Summary;