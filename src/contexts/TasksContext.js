import { createContext, useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { useNotifications } from "../hooks/useDataContext";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
    const { pushNotificationInfo, pushNotificationSuccess, pushNotificationError } = useNotifications();
    const [state, dispatch] = useReducer(tasksReducer, { taskList: [] });
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // Fetch tasks from Firestore on mount
    useEffect(() => {
        setIsPending(true);

        const auth = getAuth();
        const user = auth?.currentUser;

        const q = (user
            ? query(collection(projectFirestore, "tasks"), where("user", "==", user.email))
            : query(collection(projectFirestore, "tasks"), where("demo", "==", true))
        );

        getDocs(q).then(snapshot => {
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
            const auth = getAuth();
            const user = auth?.currentUser;
            const docRef = await addDoc(collection(projectFirestore, "tasks"), user ? { ...task, user: user.email } : { ...task, demo: true });
            dispatch({ type: 'ADD_TASK', payload: { id: docRef.id, ...task } });
            pushNotificationSuccess("Task successfully added.");
        } catch (err) {
            console.error("Failed to add task:", err);
            pushNotificationError(`Failed to add task: ${err}`);
        }
    };

    const editTask = async (task) => {
        try {
            await updateDoc(doc(projectFirestore, "tasks", task.id), task);
            dispatch({ type: 'EDIT_TASK', payload: task });
            pushNotificationSuccess("Task successfully edited.");
        } catch (err) {
            console.error("Failed to edit task:", err);
            pushNotificationError(`Failed to edit task: ${err}`);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await deleteDoc(doc(projectFirestore, "tasks", taskId));
            dispatch({ type: 'DELETE_TASK', payload: taskId });
            pushNotificationSuccess("Task deleted.");
        } catch (err) {
            console.error("Failed to delete task:", err);
            pushNotificationError(`Failed to delete task: ${err}`);
        }
    };

    return (
        <TasksContext.Provider value={{ ...state, isPending, error, addTask, editTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    );
};
