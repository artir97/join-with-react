/**
 * 
 * @param {Object} props
 * @param {string} props.imageUrl - Image URL
 * @param {React.JSX.Element} props.icon - An icon. **This icon has priority over the image URL.**
 * @param {string} props.type - HTML button type. Defaulted to `"button"`.
 * @param {string} props.side - [`"left"`, `"right"`] - Indicates where the icon is displayed in the button. Defaulted to `"left"`.
 * @param {string} props.name - Text inside the button.
 * @param {string} props.className - CSS classes separated by spaces. Defaulted to `""`
 * @param {Function} props.onClick - Callback triggered on button click. Defaulted to `() => {}`
 * @returns 
 */
const ButtonIcon = ({ imageUrl = "", icon = null, type = "button", side = "left", name = "", className = "", onClick = () => {} }) => {
    const displayedIcon = icon ? icon : <img src={imageUrl} alt={`${name} icon`} />

    return (
        <button type={type} className={`flex items-center space-x-2 ${className}`} onClick={onClick}>
            {side === "left" && displayedIcon}
            <p>{name}</p>
            {side === "right" && displayedIcon}
        </button>
    );
}

export default ButtonIcon;