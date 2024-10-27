import './Icon.css';

const AddContactIcon = ({ className }) => {
    return (
        <img src="./assets/icons/contacts/add-contact.svg"
            alt="Add contact icon"
            className={`${className} size-14 add-contact-icon shadow-md`} />
    );
}

export default AddContactIcon;