import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import useViewport from "../hooks/useViewport";

import LegalAndPrivacy from "../components/navigation/LegalAndPrivacy";
import CheckboxIcon from "../components/icons/CheckboxIcon";
import UnderlineIconInput from "../components/base/UnderlineIconInput";

import { handleColorInjection } from "../tools/svg";

const SignUp = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const { isMobile } = useViewport();

    return (
        <div className="w-full h-full bg-blue-500">
            <div className="p-10 w-full">
                <ReactSVG src={`./assets/icons/navbar/${isMobile() ? "medium" : "big"}-join.svg`} className="flex-1"
                    beforeInjection={svg => handleColorInjection(svg, "white")} />
            </div>
            <div className="lg:absolute w-full flex flex-col space-y-8 items-center justify-center">
                <div className="relative rounded-xl bg-white shadow-lg lg:px-28 max-lg:w-10/12 p-8 flex flex-col items-center space-y-2 lg:space-y-12">
                    <div>
                        <Link to="/login" className="absolute left-10 top-10">
                            <ReactSVG src={'./assets/icons/forms/arrow-left.svg'} />
                        </Link>
                        <h1 className="font-bold text-4xl border-b-2 border-blue-500">Sign up</h1>
                    </div>
                    <form className="flex flex-col space-y-2 items-center">
                        <UnderlineIconInput
                            value={name} required
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            icon={<ReactSVG src="assets/icons/forms/person.svg" />}
                        />
                        <UnderlineIconInput
                            value={mail} required
                            type="email"
                            placeholder="Mail address"
                            onChange={(e) => setMail(e.target.value)}
                            icon={<ReactSVG src="assets/icons/forms/mail.svg" />}
                        />
                        <UnderlineIconInput
                            value={password} required
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            icon={<ReactSVG src="assets/icons/forms/lock.svg" />}
                        />
                        <UnderlineIconInput
                            value={confirmPassword} required
                            type="password"
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            icon={<ReactSVG src="assets/icons/forms/lock.svg" />}
                        />
                    </form>
                    <div onClick={() => setRemember(b => !b)}
                        className="flex space-x-4 w-full">
                        <CheckboxIcon defaultValue={remember} />
                        <p className="text-sm">I accept the Privacy Policy</p>
                    </div>
                    <div className="flex space-y-4 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
                        <button className="bg-blue-500 px-3 py-1 text-white rounded">Sign up</button>
                    </div>
                </div>
            </div>
            <LegalAndPrivacy external className="text-white"/>
        </div>
    );
}

export default SignUp;