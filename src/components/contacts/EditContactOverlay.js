import BaseContactOverlay from "./BaseContactOverlay";

const EditContactOverlay = ({ onExit, name, mail, phone }) => {
    return (
        <BaseContactOverlay
            title={"Edit contact"}
            flavorText={"Tasks are better with a team!"}
            onExit={onExit}
            isEditing={true}
            name={name}
            mail={mail}
            phone={phone} />
    );
}

export default EditContactOverlay;