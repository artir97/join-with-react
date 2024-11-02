import { useDrag } from "../../hooks/useDataContext";

/**
 * `children` is a special prop you never use like the others (ex: src={...}, placeholder={...}).
 * It represents the nested elements and components inside the tag.
 * 
 * As an example:
 * <Drag ...>
 *      <div .../>
 *      <img .../>
 * </Drag>
 * 
 * Both div and img are called in children.
 */
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