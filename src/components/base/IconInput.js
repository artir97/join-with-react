import "./Base.css";

const IconInput = ({ className, placeholder, onChange, iconUrl = "" }) => {
    return (
        <div className="icon-input">
            {iconUrl
                ? <img src={iconUrl} alt="Input icon" className="icon"/>
                : <span className="icon">YES</span>
            }
            <input className={`${className}`} placeholder={placeholder} onChange={onChange}/>
        </div>
    );
}

export default IconInput;