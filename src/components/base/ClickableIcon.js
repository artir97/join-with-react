import './Icon.css';

const ClickableIcon = ({ url, name, className, onClick }) => {
    console.log(onClick);
    console.log(url);


    return (
        <img src={url}
            alt={name}
            className={`${className} size-14 clickable-icon shadow-md`}
            onClick={onClick}/>
    );
}

export default ClickableIcon;