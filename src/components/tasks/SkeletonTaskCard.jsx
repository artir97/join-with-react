import CategoryIcon from "../icons/CategoryIcon";

import './TaskCard.css';

const SkeletonTaskCard = () => {
    return (
        <div className="space-y-4 task-card shadow-sm snap-start">
            {/** Category */}
            <CategoryIcon className="self-start skeleton" />

            {/** Task color thing */}
            <div className="flex flex-col space-y-2">
                <div className="bg-blue-500 min-w-10 w-10 min-h-4 skeleton"/>
                <div className="bg-gray-400 min-w-8 w-8 min-h-3 skeleton"/>
            </div>
            
            {/** Subtask progress gauge */}{/** Subtask text */}
            {/* {subtasks.length > 0 &&
                <div className="flex items-center space-x-2">
                    <div className="h-2 flex-1 rounded-md bg-gray-200">
                        <div className="rounded-md h-full bg-blue-500" style={{ width: `${Math.floor(progress * 100)}%` }} />
                    </div>
                    <p>{subtasks.filter(s => s.done).length}/{subtasks.length} subtasks</p>
                </div>
            } */}


            <div className="flex items-center w-full">
                {/** Assignees */}
                <div className={`flex-1 flex -space-x-2 overflow-x-auto`}>
                    {[0,1,2,3].map((i) => <div key={i} className="size-11 skeleton-circle bg-gray-300 border border-white" />)}
                </div>
                {/** Priority */}
                {/* <PriorityIcon name={priority} className="size-8" /> */}
                <div className="min-h-8 min-w-8 bg-gray-400 skeleton-circle"/>
            </div>
        </div>
    );
}

export default SkeletonTaskCard;