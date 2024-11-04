import './TaskCounter.css';

const BigTaskCounter = ({ count, className = "" }) => {
    const CounterIcon = () => {
        return (
            <div className='flex space-x-4 items-center'>
                <img src="./assets/icons/summary/to-do.svg" alt="To-do icon" className="task-counter-icon ml-4" />
                <p className="font-bold text-4xl text-black">{count}</p>
            </div>
        );
    }

    return (
        <div className={`big-task py-3 px-6 task-general flex lg:flex-col flex-wrap space-x-4 justify-center items-center ${className}`}>
            <CounterIcon />
            <p className="font-light text-blue-500">Tasks To-do</p>
        </div>
    );
}

export default BigTaskCounter;