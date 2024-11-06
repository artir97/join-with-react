import { useState } from "react";

const CheckboxIcon = ({ defaultValue = false }) => {
    const [checked, setChecked] = useState(defaultValue);

    return (
        <>
            {checked && <img
                src="./assets/icons/forms/checkbox-checked.svg"
                alt="Empty checkbox"
                onClick={() => setChecked(false)}
            />}
            {!checked && <img
                src="./assets/icons/forms/checkbox-empty.svg"
                alt="Checked checkbox"
                onClick={() => setChecked(true)}
            />}
        </>
    );
}

export default CheckboxIcon;