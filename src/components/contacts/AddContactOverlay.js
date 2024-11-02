import BaseContactOverlay from './BaseContactOverlay';
import '../base/Overlay.css';

const AddContactOverlay = ({ onExit }) => {
    return (
        <BaseContactOverlay
            title={"Add contact"}
            flavorText={"Tasks are better with a team!"}
            onExit={onExit}
            isEditing={false} />
    );
}

export default AddContactOverlay;