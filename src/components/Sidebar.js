import PageLinks from "./base/PageLinks";

const Sidebar = () => {
    return (
        <div className="flex-col p-4 space-x-4 shadow-md w-56 text-gray-600">
            <PageLinks />
        </div>
    );
}

export default Sidebar;