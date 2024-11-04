import './TaskCounter.css';

const TaskCounter = ({iconUrl, name, count, className = ""}) => {
    return (
        <div className={`task-general flex-1 task-counter lg:hover:scale-110 py-3 ${className}`}>
            <div className="flex items-center space-x-2">
                <img src={iconUrl} className="task-counter-icon" alt="Just a placeholder"/>
                <div className="text-4xl font-bold">{count}</div>
            </div>
            <p className="font-extralight lg:text-lg text-center leading-tight">{name}</p>
        </div>
    );
}
 
export default TaskCounter;