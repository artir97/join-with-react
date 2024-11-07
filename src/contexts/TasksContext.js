import {createContext, useReducer, useState} from "react";

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
            // TODO 2 : Arrived here, we give you the modified task, you have to modify your task list now
            // This was previously done to handle drag and drop locally:
            // (task) => setTasks(tasks => [...tasks.filter(t => t.id !== task.id), { ...task, status: s }])
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
        const nextId = taskId++;
        dispatch({type: 'add', payload: {...task, id: nextId}});
        console.log(taskList);
    }

    const editTask = (task) => {
        // TODO 3 : You can either modify the status here (or in the handler in Tasks)
        // If you do it here, you probably need the new status in argument.
        dispatch({type: 'edit', payload: task});
    }

    return (
        <TasksContext.Provider value={{...state, addTask, editTask}}>
            {children}
        </TasksContext.Provider>
    )
}