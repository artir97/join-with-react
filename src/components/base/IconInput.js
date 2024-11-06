import { useState } from "react";

const IconInput = ({ className = "", containerClassName = "", onFocusClassName = "", onFocusContainerClassName = "", value, type, placeholder, onChange, iconUrl = "", icon = null }) => {
    const [isFocus, setFocus] = useState(false);

    return (
        <div className={`${containerClassName} flex items-center ${isFocus ? onFocusContainerClassName : ""}`}>
            <input className={`${className} flex-1 ${isFocus ? onFocusClassName : ""}`}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}/>
            {!icon && (iconUrl
                ? <img src={iconUrl} alt="Input icon" className="m-4"/>
                : <span className="m-4">lll</span>)
            }
            {icon !== null && icon}
        </div>
    );
}

export default IconInput;