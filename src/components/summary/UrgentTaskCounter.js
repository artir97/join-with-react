const UrgentTaskCounter = () => {
    return (
        <div className="w-full bg-blue-600 text-white task-general flex items-center">
            <div className="flex flex-1 flex-col justify-center items-center">
                <img src="./assets/icons/summary/urgent-tasks.svg" className="task-counter-icon" alt="Urgent icon" />
                <p>Urgent tasks</p>
            </div>
            <div className="flex flex-2 flex-col">
                <p className="font-semibold">Date...</p>
                <p className="font-extralight text-sm">Incoming deadline</p>
            </div>
        </div>
    );
}

export default UrgentTaskCounter;