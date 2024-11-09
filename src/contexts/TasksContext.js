import {createContext, useReducer} from "react";

const taskList = [];
let taskId = 0;
export const TasksContext = createContext(taskList);

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, taskList: [...state.taskList, action.payload]};
        case 'delete':
            return {...state}
        case 'edit':
            const newTasks = state.taskList.filter(t => t.id !== action.payload.id);
            return {...state, taskList: [...newTasks, action.payload]};
        default:
            return {...state}
    }
}

export const TasksProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, {
        taskList
    });

    const addTask = (task) => {
        const nextId = taskId++;
        dispatch({type: 'add', payload: {...task, id: nextId}});
    }

    const editTask = (task) => {
        dispatch({type: 'edit', payload: task});
    }

    return (
        <TasksContext.Provider value={{...state, addTask, editTask}}>
            {children}
        </TasksContext.Provider>
    )
}