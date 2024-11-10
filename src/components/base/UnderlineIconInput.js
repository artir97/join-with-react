import IconInput from "./IconInput"

const UnderlineIconInput = ({ value, large = false, onChange = () => {}, required = false, placeholder = "", icon = null, iconUrl = "" }) => {
    return (
        <IconInput
            value={value} onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="font-light"
            containerClassName={`w-full ${large ? "" : "lg:w-3/4"} border-b p-1`}
            onFocusContainerClassName="border-blue-500"
            onFocusClassName="border-0 outline-none"
            icon={icon}
            iconUrl={iconUrl}
        />
    )
}

export default UnderlineIconInput;