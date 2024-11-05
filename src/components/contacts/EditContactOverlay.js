import BaseContactOverlay from "./BaseContactOverlay";

/**
 * 
 * @param {Object} props 
 * @param {Function} props.onEditSubmit - Function to handle form submission. It takes one argument: {name, mail, phone}.
 * @param {Function} props.onExit - Function to handle exit action. Triggered on the X icon.
 * @param {Object} props.info - {name, mail, phone} - Contact info to prefill the form. 
 * @returns 
 */
const EditContactOverlay = ({ onEditSubmit, onExit, info }) => {
    return (
        <BaseContactOverlay
            title={"Edit contact"}
            flavorText={"Tasks are better with a team!"}
            onExit={onExit}
            isEditing={true}
            name={info.name}
            mail={info.mail}
            phone={info.phone}
            onSubmit={onEditSubmit}
        />
    );
}

export default EditContactOverlay;