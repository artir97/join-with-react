import "./Base.css";

const IconInput = ({ className, value, placeholder, onChange, iconUrl = "" }) => {
    return (
        <div className="icon-input flex">
            <input className={`${className} flex-1`} value={value} placeholder={placeholder} onChange={onChange}/>
            {iconUrl
                ? <img src={iconUrl} alt="Input icon" className="m-4"/>
                : <span className="m-4">lll</span>
            }
        </div>
    );
}

export default IconInput;