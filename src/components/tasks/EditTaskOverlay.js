import BaseTaskOverlay from "./BaseTaskOverlay";

const EditTaskOverlay = ({ task }) => {
    console.log(task);

    return (
        <div className="mask bg-white bg-opacity-50">
            <div className="rounded-2xl flex flex-col items-center mx-8 my-20 shadow-lg overlay fixed-h-edit-task-overlay bg-white box-border">
                <BaseTaskOverlay
                    name={task.name}
                    description={task.description}
                    date={task.dueDate}
                    selectedPriority={task.priority}
                    assigneesArr={task.assignees}
                    subtasksArr={task.subtasks}
                    taskCategory={task.category}
                />
            </div>
        </div>
    );
}

export default EditTaskOverlay;