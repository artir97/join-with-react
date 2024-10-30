const Drag = ({ dataItem, dropEffect, children }) => {
    const handleDrag = (e) => {
        e.dataTransfer.setData("drag-item", JSON.stringify(dataItem));
        e.dataTransfer.effectAllowed = dropEffect;
    }

    return (
        <div draggable onDragStart={handleDrag}>
            {children}
        </div>
    );
}

export default Drag;