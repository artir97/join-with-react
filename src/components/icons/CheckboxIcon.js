import { useState } from "react";
import { getEnvironmentLink } from "../../tools/navigation";

const CheckboxIcon = ({ defaultValue = false, onClick = () => {} }) => {
    const [checked, setChecked] = useState(defaultValue);

    return (
        <>
            {checked && <img
                src={getEnvironmentLink("assets/icons/forms/checkbox-checked.svg")}
                alt="Empty checkbox"
                onClick={() => {setChecked(false); onClick();}}
            />}
            {!checked && <img
                src={getEnvironmentLink("assets/icons/forms/checkbox-empty.svg")}
                alt="Checked checkbox"
                onClick={() => {setChecked(true); onClick();}}
            />}
        </>
    );
}

export default CheckboxIcon;