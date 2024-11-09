import PageLinks from "./base/PageLinks";
import LegalAndPrivacy from "./LegalAndPrivacy";

const Sidebar = () => {
    return (
        <div className="flex-col p-4 space-x-4 shadow-md w-56 text-gray-600">
            <PageLinks />
            <LegalAndPrivacy vertical/>
        </div>
    );
}

export default Sidebar;