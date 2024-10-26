import './TaskCounter.css';

const TaskCounter = ({iconUrl, name, count}) => {
    return (
        <div className="task-general task-counter px-6 py-3 w-2/5 flex flex-col items-center">
            <div className="flex items-center">
                <img src={iconUrl} className="task-counter-icon" alt="Just a placeholder"/>
                <div className="text-4xl font-bold">{count}</div>
            </div>
            <p className="font-extralight text-center">{name}</p>
        </div>
    );
}
 
export default TaskCounter;