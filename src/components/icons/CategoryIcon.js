const getCategoryColor = (name) => {
    switch (name) {
        case 'User story': return "#FF7A00";
        case 'Technical task': return "#0038FF";
        default: throw new Error(`No color defined for this category: ${name}`);
    }
}

const CategoryIcon = ({ name, className }) => {
    return (
        <div
            className={`rounded-md py-1 px-4 font-extralight text-white ${className}`}
            style={{ backgroundColor: getCategoryColor(name) }}>
            {name}
        </div>
    );
}

export default CategoryIcon;