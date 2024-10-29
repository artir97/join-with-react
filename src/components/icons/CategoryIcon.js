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
            className="rounded-md py-1 px-2 self-start text-white"
            style={{ backgroundColor: getCategoryColor(name) }}>
            {name}
        </div>
    );
}

export default CategoryIcon;