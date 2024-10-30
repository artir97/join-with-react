import { useState } from "react";

const CheckboxIcon = ({ defaultValue = false }) => {
    const [checked, setChecked] = useState(defaultValue);

    return (
        <>
            {checked && <img
                src="./assets/icon/add-task/check-button.png"
                alt="Empty checkbox"
                onClick={() => setChecked(true)}
            />}
            {!checked && <img
                src="./assets/icon/add-task/check-button-checked.png"
                alt="Checked checkbox"
                onClick={() => setChecked(false)}
            />}
        </>
    );
}

export default CheckboxIcon;