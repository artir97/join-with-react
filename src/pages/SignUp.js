import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import useViewport from "../hooks/useViewport";

import LegalAndPrivacy from "../components/navigation/LegalAndPrivacy";
import CheckboxIcon from "../components/icons/CheckboxIcon";
import UnderlineIconInput from "../components/base/UnderlineIconInput";

import { handleColorInjection } from "../tools/svg";
import { getEnvironmentLink } from "../tools/navigation";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import { useNotifications } from "../hooks/useDataContext";

const SignUp = () => {
    const [remember, setRemember] = useState(false);
    const { pushNotificationError, pushNotificationInfo } = useNotifications();

    const { isMobile } = useViewport();

    /**
     * 
     * @param {FormData} formData 
     */
    function handleSignUp(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");

        // User input tests
        if (password !== confirmPassword) {
            pushNotificationError("The two passwords are not identical.");
            return;
        }
        if (password.length < 6) {
            pushNotificationError("Your password should have more than 6 characters.");
            return;
        }

        // Signing up
        console.log(`Attempting to sign up: ${email}.`);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                const displayName = formData.get("name")

                console.log("User successfully created.");

                updateProfile(user, {
                    displayName
                }).then(() => {
                    console.log("User name updated.");
                    pushNotificationInfo(`Welcome, ${displayName}.`);
                }).catch((error) => {
                    console.error(`${error.code}: ${error.message}`);
                    pushNotificationError(`${error.code}: ${error.message}`);
                })
            })
            .catch((error) => {
                console.error(`${error.code}: ${error.message}`);
                pushNotificationError(`${error.code}: ${error.message}`);
            });
    }

    return (
        <div className="w-full h-full bg-blue-500">
            <div className="p-10 w-full">
                <ReactSVG src={`${getEnvironmentLink(`assets/icons/navbar/${isMobile() ? "medium" : "big"}-join.svg`)}`} className="flex-1"
                    beforeInjection={svg => handleColorInjection(svg, "white")} />
            </div>
            <div className="lg:absolute w-full flex flex-col space-y-8 items-center justify-center">
                <div className="relative rounded-xl bg-white shadow-lg lg:px-28 max-lg:w-10/12 p-8 flex flex-col items-center space-y-2 lg:space-y-12">
                    <div>
                        <Link to="/login" className="absolute left-10 top-10">
                            <ReactSVG src={getEnvironmentLink("assets/icons/forms/arrow-left.svg")} />
                        </Link>
                        <h1 className="font-bold text-4xl border-b-2 border-blue-500">Sign up</h1>
                    </div>
                    <form className="flex flex-col space-y-2 items-center" action={handleSignUp}>
                        <UnderlineIconInput
                            required large
                            name="name"
                            placeholder="Name"
                            icon={<ReactSVG src={getEnvironmentLink("assets/icons/forms/person.svg")} />}
                        />
                        <UnderlineIconInput
                            required large
                            type="email"
                            name="email"
                            placeholder="Mail address"
                            icon={<ReactSVG src={getEnvironmentLink("assets/icons/forms/mail.svg")} />}
                        />
                        <UnderlineIconInput
                            required large
                            type="password"
                            name="password"
                            placeholder="Password"
                            icon={<ReactSVG src={getEnvironmentLink("assets/icons/forms/lock.svg")} />}
                        />
                        <UnderlineIconInput
                            required large
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm password"
                            icon={<ReactSVG src={getEnvironmentLink("assets/icons/forms/lock.svg")} />}
                        />
                        <div onClick={() => setRemember(b => !b)}
                            className="flex space-x-4 w-full">
                            <CheckboxIcon defaultValue={remember} />
                            <p className="text-sm">I accept the <Link to={`/ext/privacy`} className="underline text-blue-800">Privacy Policy</Link></p>
                        </div>
                        <div className="flex space-y-4 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
                            <button type="submit" className="bg-blue-500 px-3 py-1 text-white rounded-sm">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
            <LegalAndPrivacy external className="text-white" />
        </div>
    );
}

export default SignUp;