import { createContext, useReducer } from "react";
import { useNotifications } from "../hooks/useDataContext";

const taskList = [];
let taskId = 0;
export const TasksContext = createContext(taskList);

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, taskList: [...state.taskList, action.payload] };
        case 'delete':
            return {
                ...state,
                taskList: state.taskList.filter((task) => task.id !== action.payload.id)
            };
        case 'edit':
            return {
                ...state,
                taskList: state.taskList.map(task =>
                    task.id === action.payload.id ? { ...task, ...action.payload } : task
                )
            };
        default:
            return { ...state }
    }
}

export const TasksProvider = ({ children }) => {
    const { pushNotificationInfo } = useNotifications();
    const [state, dispatch] = useReducer(taskReducer, {
        taskList
    });

    const addTask = (task) => {
        const nextId = taskId++;
        dispatch({ type: 'add', payload: { ...task, id: nextId } });
        pushNotificationInfo("Task successfully added.");
    }

    const editTask = (task) => {
        dispatch({ type: 'edit', payload: task });
    };

    const deleteTask = (taskId) => {
        dispatch({ type: 'delete', payload: { id: taskId } });
        pushNotificationInfo("Task deleted.");
    };


    return (
        <TasksContext.Provider value={{ ...state, addTask, editTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}