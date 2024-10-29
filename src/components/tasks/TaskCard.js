import CategoryIcon from "../icons/CategoryIcon";
import NameIcon from "../icons/NameIcon";
import PriorityIcon from "../icons/PriorityIcon";

const TaskCard = ({ category, name, description = "", subtasks, assignees, priority }) => {
    return (
        <div className="flex flex-col space-y-4 rounded-md w-64 p-4">
            {/** Category */}
            <CategoryIcon name={category} />
            {/** Task color thing */}
            <div>
                <p className="text-blue-500 font-semibold">{name}</p>
                <p className="text-gray-400 font-light">{description}</p>
            </div>
            {/** Subtask progress gauge */}{/** Subtask text */}
            <div className="flex items-center space-x-2">
                <div className="flex-1 rounded-md h-2 bg-blue-500" />
                <p>{0}/{subtasks.length} subtasks</p>
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