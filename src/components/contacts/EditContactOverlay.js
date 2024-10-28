import BaseContactOverlay from "./BaseContactOverlay";

const EditContactOverlay = ({onExit}) => {
    return (
        <BaseContactOverlay
            title={"Edit contact"}
            flavorText={"Tasks are better with a team!"}
            onExit={onExit}
            isEditing={true} />
    );
}
 
export default EditContactOverlay;