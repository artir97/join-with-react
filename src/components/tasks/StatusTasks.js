import { useDrag } from "../../hooks/useDataContext";
import Drag from "../base/Drag";
import { Move } from "../base/DropEffectValues";
import TaskCard from "./TaskCard";
import TaskDrop from "./TaskDrop";

const StatusTasks = ({ status, tasks, updateTask }) => {
    const { isDragging } = useDrag();

    return (
        <div className="flex flex-col py-2 space-y-4">
            <div className="flex items-center">
                <p className="flex-1 text-2xl font-bold ">{status}</p>
                <div className="text-blue-500 border border-blue-500 rounded-md size-10 flex items-center justify-center text-4xl">+</div>
            </div>

            <div className="flex w-full overflow-x-auto space-x-4 pb-4">
                {tasks.length > 0 && tasks.map((t, i) => (
                    <Drag key={i} dataItem={t} dropEffect={Move}>
                        <TaskCard
                            category={t.category}
                            name={t.name}
                            description={t.description}
                            subtasks={t.subtasks}
                            assignees={t.assignees}
                            priority={t.priority}
                        />
                    </Drag>
                ))}
                {tasks.length === 0 && !isDragging && (
                    <div className="border-dashed border w-full border-gray-300 bg-gray-100 rounded-lg text-center py-3">
                        <p className="text-gray-400">No task {status}</p>
                    </div>
                )}
                {isDragging && <TaskDrop onItemDropped={updateTask} />}
            </div>
        </div>
    );
}

export default StatusTasks;