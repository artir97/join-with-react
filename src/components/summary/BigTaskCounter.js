import './TaskCounter.css';

const BigTaskCounter = ({ count, className = "" }) => {
    const CounterIcon = () => {
        return (
            <div className='flex space-x-4 lg:space-x-2 items-center'>
                <img src="./assets/icons/summary/to-do.svg" alt="To-do icon" className="task-counter-icon" />
                <p className="font-bold text-4xl text-black">{count}</p>
            </div>
        );
    }

    return (
        <div className={`big-task task-general flex lg:hover:scale-110 lg:flex-col max-lg:space-x-4 ${className}`}>
            <CounterIcon />
            <p className="font-light lg:text-lg text-blue-500">Tasks To-do</p>
        </div>
    );
}

export default BigTaskCounter;