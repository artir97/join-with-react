import { createContext, useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { useNotifications } from "../hooks/useDataContext";

export const TasksContext = createContext({ taskList: [] });

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASK_LIST':
            return { ...state, taskList: action.payload };
        case 'ADD_TASK':
            return { ...state, taskList: [...state.taskList, action.payload] };
        case 'EDIT_TASK':
            return {
                ...state,
                taskList: state.taskList.map(task =>
                    task.id === action.payload.id ? { ...task, ...action.payload } : task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                taskList: state.taskList.filter(task => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export const TasksProvider = ({ children }) => {
    const { pushNotificationInfo } = useNotifications();
    const [state, dispatch] = useReducer(tasksReducer, { taskList: [] });
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // Fetch tasks from Firestore on mount
    useEffect(() => {
        setIsPending(true);
        projectFirestore.collection("tasks").get()
            .then(snapshot => {
                if (snapshot.empty) {
                    setError("No tasks found.");
                    setIsPending(false);
                } else {
                    const tasks = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    dispatch({ type: 'SET_TASK_LIST', payload: tasks });
                    setIsPending(false);
                }
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
    }, []);

    const addTask = async (task) => {
        try {
            const docRef = await projectFirestore.collection("tasks").add(task);
            dispatch({ type: 'ADD_TASK', payload: { id: docRef.id, ...task } });
            pushNotificationInfo("Task successfully added.");
        } catch (err) {
            console.error("Failed to add task:", err);
        }
    };

    const editTask = async (task) => {
        try {
            await projectFirestore.collection("tasks").doc(task.id).update(task);
            dispatch({ type: 'EDIT_TASK', payload: task });
            pushNotificationInfo("Task successfully edited.");
        } catch (err) {
            console.error("Failed to edit task:", err);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await projectFirestore.collection("tasks").doc(taskId).delete();
            dispatch({ type: 'DELETE_TASK', payload: taskId });
            pushNotificationInfo("Task deleted.");
        } catch (err) {
            console.error("Failed to delete task:", err);
        }
    };

    return (
        <TasksContext.Provider value={{ ...state, isPending, error, addTask, editTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    );
};
