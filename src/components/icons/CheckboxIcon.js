import { useState } from "react";

const CheckboxIcon = ({ defaultValue = false, onClick }) => {
    const [checked, setChecked] = useState(defaultValue);

    return (
        <>
            {checked && <img
                src="./assets/icons/forms/checkbox-checked.svg"
                alt="Empty checkbox"
                onClick={() => {setChecked(false); onClick();}}
            />}
            {!checked && <img
                src="./assets/icons/forms/checkbox-empty.svg"
                alt="Checked checkbox"
                onClick={() => {setChecked(true); onClick();}}
            />}
        </>
    );
}

export default CheckboxIcon;