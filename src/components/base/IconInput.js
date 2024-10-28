import "./Base.css";

const IconInput = ({ className, placeholder, onChange, iconUrl = "" }) => {
    return (
        <div className="icon-input">
            <input className={`${className} w-5/6`} placeholder={placeholder} onChange={onChange}/>
            {iconUrl
                ? <img src={iconUrl} alt="Input icon" className="icon"/>
                : <span className="icon">lll</span>
            }
        </div>
    );
}

export default IconInput;