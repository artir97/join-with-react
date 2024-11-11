import { ReactSVG } from 'react-svg';

import Subtask from './Subtask';

import CategoryIcon from '../icons/CategoryIcon';
import NameIcon from '../icons/NameIcon';
import PriorityIcon from '../icons/PriorityIcon';
import ButtonIcon from '../icons/ButtonIcon';

import '../base/Overlay.css';
import Separator from '../base/Separator';

import {useTasks} from "../../hooks/useDataContext";

const TaskInfoOverlay = ({ task, onExit, onOpenEdit, onDeleteTask }) => {
    const { taskList } = useTasks();
    const editedTask = taskList.find((t) => t.id === task.id);
    return (
            <div className='mask bg-white bg-opacity-50'>
                <div className='rounded-2xl flex flex-col mx-8 my-20 p-4 shadow-lg overlay bg-white box-border space-y-4'>
                    <div className='flex items-center'>
                        <CategoryIcon name={editedTask.category} />
                        <div className='flex-1'/>
                        <ReactSVG className='p-4 self-end text-blue-500 cursor-pointer' onClick={onExit}
                            src="./assets/icons/forms/close-blue.svg"/>
                    </div>

                    <h2 className='text-3xl font-bold'>{editedTask.name}</h2>
                    <p className='font-light'>{editedTask.description}</p>

                    <p><span className='font-semibold'>Due date:</span> {editedTask.dueDate}</p>
                    <div className='flex space-x-2 items-center'>
                        <p><span className='font-semibold'>Priority:</span> <span className='capitalize'>{editedTask.priority}</span></p>
                        <PriorityIcon name={editedTask.priority} className="size-4"/>
                    </div>
                    <div>
                        <p className='font-semibold'>Assigned to:</p>
                        {editedTask.assignees.map((a, i) => <div key={i} className='flex items-center space-x-4 p-2'>
                            <NameIcon name={a.name} />
                            <p>{a.name}</p>
                        </div>)}
                    </div>
                    <div>
                        <p className='font-semibold'>Subtasks</p>
                        {editedTask.subtasks.map((s, i) =>
                                <Subtask
                                    key={i}
                                    done={s.done}
                                    name={s.name}
                                    onClick={()=> (s.done = !s.done)}
                                />
                        )}
                    </div>
                    <div className='flex items-center self-end'>
                        <ButtonIcon onClick={onDeleteTask} imageUrl={"./assets/icons/forms/trash.svg"} name={"Delete"} className='px-2 py-1 cursor-pointer'/>
                        <Separator/>
                        <ButtonIcon onClick={onOpenEdit} imageUrl={"./assets/icons/forms/edit.svg"} name={"Edit"} className='px-2 py-1 cursor-pointer'/>
                    </div>
                </div>
            </div>
    );
}

export default TaskInfoOverlay;