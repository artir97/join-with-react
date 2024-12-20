import { Link } from "react-router-dom";

import { getStatusIndex } from "../../tools/status";

import { useDrag } from "../../hooks/useDataContext";
import Drag from "../ux/Drag";
import { Move } from "../ux/DropEffectValues";
import TaskCard from "./TaskCard";
import TaskDrop from "./TaskDrop";
import { getEnvironmentLink } from "../../tools/navigation";

const StatusTasks = ({ status, tasks, updateTask, showOverlay }) => {
    const { isDragging } = useDrag();

    return (
        <div className="flex flex-col flex-1 py-2 space-y-4 snap-start">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold ">{status}</p>
                <div className="text-blue-500 border border-blue-500 rounded-md size-6 flex items-center justify-center text-4xl">
                    {/** TODO Add default status for the different buttons */}
                    <Link to={`/addTask/${getStatusIndex(status)}`}><img src={getEnvironmentLink("assets/icons/forms/plus.svg")} alt="Plus icon" /></Link>
                </div>
            </div>

            <div className="flex lg:flex-col w-full max-lg:overflow-x-scroll max-lg:snap-x lg:snap-y scroll-p-0 lg:space-y-4 max-lg:space-x-4 pb-4">
                {tasks.length > 0 && tasks.map((t, i) => (
                    <Drag key={i} dataItem={t} dropEffect={Move}>
                        <TaskCard
                            category={t.category}
                            name={t.name}
                            description={t.description}
                            subtasks={t.subtasks}
                            assignees={t.assignees}
                            priority={t.priority}
                            onClick={() => showOverlay(t)}
                        />
                    </Drag>

                ))}
                {tasks.length === 0 && !isDragging && (
                    <div className="border-dashed border w-full border-gray-300 bg-gray-100 rounded-lg text-center py-3 min-w-64">
                        <p className="text-gray-400">No task {status}</p>
                    </div>
                )}
                {isDragging && <TaskDrop onItemDropped={updateTask} />}
            </div>
        </div>
    );
}

export default StatusTasks;