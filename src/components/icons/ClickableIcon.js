import './Icon.css';

const ClickableIcon = ({ url, name, className, onClick = () => {}}) => {
    return (
        <img src={url}
            alt={name}
            className={`${className} size-14 clickable-icon shadow-md`}
            onClick={onClick}/>
    );
}

export default ClickableIcon;