import IconInput from "./IconInput"

const UnderlineIconInput = ({ value, onChange, placeholder, icon }) => {
    return (
        <IconInput
            value={value} onChange={onChange}
            placeholder={placeholder}
            className="font-light"
            containerClassName="w-full border-b p-2"
            onFocusContainerClassName="border-blue-500"
            onFocusClassName="border-0 outline-none"
            icon={icon}
        />
    )
}

export default UnderlineIconInput;