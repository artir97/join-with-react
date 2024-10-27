import BigTaskCounter from "../components/summary/BigTaskCounter";
import TaskCounter from "../components/summary/TaskCounter";
import UrgentTaskCounter from "../components/summary/UrgentTaskCounter";

const Summary = () => {
    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <UrgentTaskCounter />
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
}

export default Summary;