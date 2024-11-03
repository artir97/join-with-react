import BaseContactOverlay from './BaseContactOverlay';
import '../base/Overlay.css';

/**
 * 
 * @param {Object} props 
 * @param {Function} props.onAddSubmit - Function to handle form submission. It takes one argument: {name, mail, phone}.
 * @param {Function} props.onExit - Function to handle exit action. Triggered on the X icon.
 */
const AddContactOverlay = ({ onExit, onAddSubmit }) => {
    return (
        <BaseContactOverlay
            title={"Add contact"}
            flavorText={"Tasks are better with a team!"}
            onExit={onExit}
            isEditing={false}
            onSubmit={onAddSubmit} />
    );
}

export default AddContactOverlay;