import './TaskCounter.css';

const UrgentTaskCounter = ({ count, date, className = "" }) => {
    return (
        <div className={`task-general urgent-task ${className}`}>
            <div className='flex space-x-2 justify-center items-center lg:hover:scale-125 duration-300'>
                <div className="flex flex-col justify-center items-center px-2">
                    <div className="flex items-center space-x-1">
                        <img src="./assets/icons/summary/urgent-tasks.svg" className="task-counter-icon" alt="Urgent icon" />
                        <p className="font-bold text-3xl pr-2">{count}</p>
                    </div>
                    <p className="font-extralight text-center">Urgent tasks</p>
                </div>
                <div className="flex flex-col left-separator py-2 pl-2">
                    {date
                        ? <>
                            <p className="font-semibold lg:text-xl">{date}</p>
                            <p className="font-extralight text-sm lg:text-lg hover-scale duration-300">Incoming deadline</p>
                        </>
                        : <p className="font-extralight text-sm lg:text-lg">No urgent tasks</p>
                    }
                </div>
            </div>
        </div >
    );
}

export default UrgentTaskCounter;