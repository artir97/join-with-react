const getIconURL = (name) => {
    switch (name) {
        case "low": return "./assets/icons/priorities/low.svg";
        case "medium": return "./assets/icons/priorities/medium.svg";
        case "urgent": return "./assets/icons/priorities/urgent.svg";
        default: throw new Error(`This priority doesn't have an icon: ${name}`);
    }
}

const PriorityIcon = ({name, className}) => {
    return (
        <img src={getIconURL(name)} alt={`Priority ${name} icon`} className={className}/>
    )
}
 
export default PriorityIcon;