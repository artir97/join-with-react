import CategoryIcon from "../icons/CategoryIcon";
import NameIcon from "../icons/NameIcon";
import PriorityIcon from "../icons/PriorityIcon";

import './TaskCard.css';

const TaskCard = ({ category, name, description = "", subtasks = [], assignees, priority }) => {
    const progress = subtasks.filter(s => s.done).length / subtasks.length;

    return (
        <div className="space-y-4 task-card shadow-lg">
            {/** Category */}
            <CategoryIcon name={category} className="self-start"/>
            {/** Task color thing */}
            <div>
                <p className="text-blue-500 font-semibold">{name}</p>
                <p className="text-gray-400 font-light">{description}</p>
            </div>
            {/** Subtask progress gauge */}{/** Subtask text */}
            <div className="flex items-center space-x-2">
                <div className="h-2 flex-1 rounded-md bg-gray-200">
                    <div className="rounded-md h-full bg-blue-500" style={{ width: `${Math.floor(progress * 100)}%` }} />
                </div>
                <p>{subtasks.filter(s => s.done).length}/{subtasks.length} subtasks</p>
            </div>

            <div className="flex items-center">
                {/** Assignees */}
                <div className="flex-1 flex -space-x-2">
                    {assignees.map((a, i) => <NameIcon name={a.name} key={i} />)}
                </div>
                {/** Priority */}
                <PriorityIcon name={priority} className="size-8" />
            </div>
        </div>
    );
}

export default TaskCard;