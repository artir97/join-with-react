const getCategoryColor = (name) => {
    switch (name) {
        case 'User Story': return "#FF7A00";
        case 'Technical Task': return "#0038FF";
        default: throw new Error(`No color defined for this category: ${name}`);
    }
}

const CategoryIcon = ({ name, className }) => {
    return (
        <div
            className={`rounded-md py-1 px-4 font-extralight text-white ${!name ? "min-h-8 min-w-20 h-8 w-20" : ""} ${className}`}
            style={{ backgroundColor: name ? getCategoryColor(name) : "#99a1af"}}>
            {name}
        </div>
    );
}

export default CategoryIcon;