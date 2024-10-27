import './TaskCounter.css';

const TaskCounter = ({iconUrl, name, count}) => {
    return (
        <div className="task-general flex-1 task-counter py-3">
            <div className="flex items-center">
                <img src={iconUrl} className="task-counter-icon" alt="Just a placeholder"/>
                <div className="text-4xl font-bold">{count}</div>
            </div>
            <p className="font-extralight text-center leading-tight">{name}</p>
        </div>
    );
}
 
export default TaskCounter;