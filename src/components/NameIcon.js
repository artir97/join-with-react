const hue = (v1, v2) => {
    return Math.floor((v1 * 25 + v2) * 255 / (25 * 25));
}

const NameIcon = ({ name }) => {
    const displayedName = name.split(" ").map(n => n.charAt(0).toUpperCase()).join("");
    const values = name.split(" ").map(n => n.charAt(0).toUpperCase().charCodeAt(0) - 64);

    return (
        <div className="size-11 min-h-11 min-w-11 flex justify-center items-center rounded-full p-1.5 text-sm text-white border-2 border-white" style={{ backgroundColor: `hsl(${hue(values[0], values[1])}, 50%, 50%)` }}>
            <div>{displayedName}</div>
        </div>
    )
}
export default NameIcon;