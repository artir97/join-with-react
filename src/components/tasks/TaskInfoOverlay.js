import CategoryIcon from '../icons/CategoryIcon';
import NameIcon from '../icons/NameIcon';
import PriorityIcon from '../icons/PriorityIcon';
import Subtask from './Subtask';

import '../base/Overlay.css';

function capitalize(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const TaskInfoOverlay = ({ task, onExit }) => {
    return (
        <div className='mask bg-white bg-opacity-50'>
            <div className='rounded-2xl flex flex-col mx-8 my-20 p-4 shadow-lg overlay bg-white box-border space-y-4'>
                <div className='flex items-center'>
                    <CategoryIcon name={task.category} />
                    <div className='flex-1'/>
                    <p className='p-4 self-end' onClick={onExit}>X</p>
                </div>

                <h2 className='text-3xl font-bold'>{task.name}</h2>
                <p className='font-light'>{task.description}</p>

                <p><span className='font-semibold'>Due date:</span> {task.dueDate}</p>
                <div className='flex space-x-2 items-center'>
                    <p><span className='font-semibold'>Priority:</span> {capitalize(task.priority)}</p>
                    <PriorityIcon name={task.priority} className="size-4"/>
                </div>
                <div>
                    <p className='font-semibold'>Assigned to:</p>
                    {task.assignees.map((a, i) => <div key={i} className='flex items-center space-x-4 p-2'>
                        <NameIcon name={a.name} />
                        <p>{a.name}</p>
                    </div>)}
                </div>
                <div>
                    <p className='font-semibold'>Subtasks</p>
                    {task.subtasks.map((s, i) => <Subtask key={i} done={s.done} name={s.name} />)}
                </div>
            </div>
        </div>
    );
}

export default TaskInfoOverlay;