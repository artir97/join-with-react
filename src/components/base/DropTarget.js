const DropTarget = ({ onItemDropped, dropEffect, children }) => {
    function handleDrop(e) {
        const droppedItem = e.dataTransfer.getData("drag-item");
        if (droppedItem) {
            onItemDropped(JSON.parse(droppedItem));
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = dropEffect;
    }

    function handleDragEnter(e) {
        e.dataTransfer.dropEffect = dropEffect;
    }

    return (
        <div onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
        >
            {children}
        </div>
    );
}

export default DropTarget;