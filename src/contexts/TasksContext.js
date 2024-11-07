import {createContext, useReducer} from "react";

const taskList = [];

export const TasksContext = createContext(taskList);


const taskReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, taskList: [...state.taskList, action.payload]};
        case 'delete':
            return {...state}
        case 'edit':
            return {...state}
        default:
            return {...state}
    }
}

export const TasksProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, {
        taskList
    });

    const addTask = (task) => {
        dispatch({type: 'add', payload: task});
    }

    return (
        <TasksContext.Provider value={{...state, addTask}}>
            {children}
        </TasksContext.Provider>
    )
}