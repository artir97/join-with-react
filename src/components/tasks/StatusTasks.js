import TaskCard from "./TaskCard";

const StatusTasks = ({ status, tasks }) => {
    return (
        <div className="flex flex-col py-2">
            <div className="flex items-center">
                <p className="flex-1 text-2xl font-bold ">{status}</p>
                <div className="text-blue-500 border border-blue-500 rounded-md size-10 flex items-center justify-center text-4xl">+</div>
            </div>
            <div className="flex w-full overflow-x-auto space-x-4">
                {tasks.map((t, i) => (
                    <TaskCard 
                        key={i}
                        category={t.category}
                        name={t.name}
                        description={t.description}
                        subtasks={t.subtasks}
                        assignees={t.assignees}
                        priority={t.priority}
                    />
                ))}
            </div>
        </div>
    );
}

export default StatusTasks;