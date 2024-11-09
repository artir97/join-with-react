import PageLinks from "./base/PageLinks";
import LegalAndPrivacy from "./LegalAndPrivacy";

const Sidebar = () => {
    return (
        <div className="flex flex-col p-4 justify-between shadow-md w-56 text-gray-600">
            <div>
                <PageLinks />
            </div>
            <LegalAndPrivacy vertical />
        </div>
    );
}

export default Sidebar;