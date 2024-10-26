const UrgentTaskCounter = () => {
    return (
        <div className="w-10/12 bg-blue-600 text-white task-general flex">
            <div className="flex flex-col">
                <img src="./assets/icons/summary/urgent-tasks.svg" className="task-counter-icon" alt="Urgent icon" />
                <p>Urgent tasks</p>
            </div>
            <div className="flex flex-col">
                <p>Date...</p>
                <p>Incoming deadline</p>
            </div>
        </div>
    );
}

export default UrgentTaskCounter;