const BigTaskCounter = ({count}) => {
    return (
        <div className="bg-blue-200 w-full py-3 task-general flex items-center hover:rounded-ss-none hover:bg-white duration-300">
            <img src="./assets/icons/summary/to-do.svg" alt="To-do icon" className="task-counter-icon"/>
            <p className="font-bold text-4xl text-black">{count}</p>
            <p className="font-light text-blue-500">Tasks To-do</p>
        </div>
    );
}
 
export default BigTaskCounter;