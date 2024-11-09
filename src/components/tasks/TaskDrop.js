import { Move } from '../ux/DropEffectValues';
import DropTarget from '../ux/DropTarget';
import './TaskCard.css';

const TaskDrop = ({ onItemDropped }) => {
    return (
        <DropTarget onItemDropped={onItemDropped} dropEffect={Move}>
            <div className='task-card border-dashed border border-blue-300 bg-blue-100 h-56' />
        </DropTarget>
    );
}

export default TaskDrop;