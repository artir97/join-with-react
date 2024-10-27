import './TaskCounter.css';

const UrgentTaskCounter = ({ count, date }) => {
    return (
        <div className="p-4 task-general flex space-x-2 urgent-task items-center">
            <div className="flex flex-col justify-center items-center px-2">
                <div className="flex items-center space-x-1">
                    <img src="./assets/icons/summary/urgent-tasks.svg" className="task-counter-icon" alt="Urgent icon" />
                    <p className="font-bold text-3xl pr-2">{count}</p>
                </div>
                <p className="font-extralight text-center">Urgent tasks</p>
            </div>
            <div className="flex flex-col border-l border-white py-2 pl-2">
                {date
                    ? <>
                        <p className="font-semibold">{date}</p>
                        <p className="font-extralight text-sm hover-scale duration-300">Incoming deadline</p>
                    </>
                    : <p className="font-extralight text-sm">No urgent tasks</p>
                }
            </div>
        </div >
    );
}

export default UrgentTaskCounter;