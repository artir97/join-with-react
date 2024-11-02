const ButtonIcon = ({imageUrl, name, className = "", onClick}) => {
    return (
        <div className={`flex space-x-2 ${className}`} onClick={onClick}>
            <img src={imageUrl} alt={`${name} icon`}/>
            <p>{name}</p>
        </div>
    );
}
 
export default ButtonIcon;