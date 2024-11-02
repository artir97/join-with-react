import { Move } from '../base/DropEffectValues';
import DropTarget from '../base/DropTarget';
import './TaskCard.css';

const TaskDrop = ({ onItemDropped }) => {
    return (
        <DropTarget onItemDropped={onItemDropped} dropEffect={Move}>
            <div className='task-card border-dashed border border-blue-300 bg-blue-100 h-56' />
        </DropTarget>
    );
}

export default TaskDrop;