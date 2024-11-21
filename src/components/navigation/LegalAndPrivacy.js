import { Link } from "react-router-dom";

const LegalAndPrivacy = ({ vertical = false, external = false, className }) => {
    const externalPrefix = external ? '/ext' : '';

    return (
        <>
            {!vertical &&
                <div className={`flex w-full absolute bottom-12 justify-center space-x-4 ${className}`}>
                    <Link to={`${externalPrefix}/privacy`}>Privacy Policy</Link>
                    <Link to={`${externalPrefix}/legal`}>Legal Notice</Link>
                </div>
            }
            {vertical &&
                (!external &&
                    <div className="flex flex-col-reverse text-gray-500">
                        <Link to={`${externalPrefix}/legal`} className="p-2">Legal Notice</Link>
                        <Link to={`${externalPrefix}/privacy`} className="p-2">Privacy Policy</Link>
                    </div>
                )
            }
        </>
    );
}

export default LegalAndPrivacy;