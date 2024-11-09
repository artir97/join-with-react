import CheckboxIcon from "../icons/CheckboxIcon";

const Subtask = ({done, name, onClick}) => {
    return (
        <div className="flex items-center space-x-4 p-2">
            <CheckboxIcon defaultValue={done} onClick={onClick} />
            <p>{name}</p>
        </div>
    );
}
 
export default Subtask;