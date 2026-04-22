import IconInput from "./IconInput"

const UnderlineIconInput = ({ name, type, large = false, required = false, placeholder = "", icon = null, iconUrl = "" }) => {
    return (
        <IconInput
            required={required}
            placeholder={placeholder}
            type={type}
            name={name}
            className="font-light"
            containerClassName={`w-full ${large ? "" : "lg:w-3/4"} border-b p-1`}
            onFocusContainerClassName="border-blue-500"
            onFocusClassName="border-0 outline-hidden"
            icon={icon}
            iconUrl={iconUrl}
        />
    )
}

export default UnderlineIconInput;