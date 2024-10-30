import { useDrag } from "../../hooks/useDataContext";

const Drag = ({ dataItem, dropEffect, children }) => {
    const { setDragging } = useDrag();

    const handleDrag = (e) => {
        e.dataTransfer.setData("drag-item", JSON.stringify(dataItem));
        e.dataTransfer.effectAllowed = dropEffect;
        setDragging(true);
    }

    return (
        <div draggable
            onDragStart={handleDrag}
            onDragEnd={() => setDragging(false)}>
            {children}
        </div>
    );
}

export default Drag;