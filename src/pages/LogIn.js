import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import useViewport from "../hooks/useViewport";

import LegalAndPrivacy from "../components/navigation/LegalAndPrivacy";
import CheckboxIcon from "../components/icons/CheckboxIcon";
import MobileSwitch from "../components/base/MobileSwitch";
import UnderlineIconInput from "../components/base/UnderlineIconInput";
import { getEnvironmentLink } from "../tools/navigation";

const LogIn = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const { isMobile } = useViewport();

    const SignUpInfo = () => <div className="flex items-center space-x-4">
        <p>Not a Join user?</p>
        <Link to="/signup" className="px-2 py-1 bg-blue-500 text-white rounded">Sign up</Link>
    </div>

    return (
        <>
            <div className="p-10 w-full">
                <div className="flex items-start">
                    <ReactSVG src={`${getEnvironmentLink(`assets/icons/navbar/${isMobile() ? "medium" : "big"}-join.svg`)}`} className="flex-1" />
                    <MobileSwitch desktopComponent={<SignUpInfo />} />
                </div>
            </div>
            <div className="lg:absolute w-full flex flex-col space-y-8 items-center justify-center">
                <div className="rounded-xl shadow-lg lg:px-28 lg:py-12 max-lg:w-10/12 p-4 flex flex-col items-center space-y-4 lg:space-y-12">
                    <h1 className="font-bold text-4xl py-4 border-b-2 border-blue-500">Log in</h1>
                    <form className="flex flex-col space-y-4 items-center">
                        <UnderlineIconInput
                            value={mail} required large
                            type="email"
                            placeholder="Your mail address"
                            onChange={(e) => setMail(e.target.value)}
                            icon={<ReactSVG src={getEnvironmentLink("assets/icons/forms/mail.svg")} />}
                        />
                        <UnderlineIconInput
                            value={password} required large
                            type="password"
                            placeholder="Your password"
                            onChange={(e) => setPassword(e.target.value)}
                            icon={<ReactSVG src={getEnvironmentLink("assets/icons/forms/lock.svg")} />}
                        />
                        <div onClick={() => setRemember(b => !b)}
                            className="flex space-x-4 self-start w-full">
                            <CheckboxIcon defaultValue={remember} />
                            <p className="text-sm">Remember me</p>
                        </div>
                    </form>
                    <div className="flex space-y-4 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
                        <button className="bg-blue-500 px-3 py-1 text-white rounded">Log in</button>
                        <Link to="/summary" className="text-gray-500 px-3 py-1 border-gray-500 border rounded">Guest log in</Link>
                    </div>
                </div>
                <MobileSwitch mobileComponent={<SignUpInfo />} />
            </div>
            <LegalAndPrivacy external className="text-gray-500"/>
        </>
    );
}

export default LogIn;