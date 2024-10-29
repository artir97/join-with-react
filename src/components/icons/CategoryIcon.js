const getCategoryColor = (name) => {
    switch (name) {
        case 'User story': return "#FF7A00";
        case 'Technical task': return "#0038FF";
        default: throw new Error(`No color defined for this category: ${name}`);
    }
}

const CategoryIcon = ({ name }) => {
    return (
        <div
            className="rounded-md p-1 flex-1 text-white"
            style={{ backgroundColor: getCategoryColor(name) }}>
            {name}
        </div>
    );
}

export default CategoryIcon;