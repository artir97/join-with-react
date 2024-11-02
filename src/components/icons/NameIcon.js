const hue = (v1, v2) => {
    // console.log(v1, v2, "=>", Math.floor((v1 * 25 + v2) * 255 / (25 * 25)));
    return Math.floor((v1 * 25 + v2) * 255 / (26 * 25));
}

const NameIcon = ({ name, className, large = false }) => {
    const displayedName = name.trim().split(" ").map(n => n.charAt(0).toUpperCase()).join("");
    const values = name.trim().split(" ").map(n => n.charAt(0).toUpperCase().charCodeAt(0) - 64);

    return (
        <div className={`${className} border border-white rounded-full ${large ? "size-20 min-h-20 min-w-20 text-3xl" : "size-10 min-h-10 min-w-10 text-sm"} p-1.5 flex justify-center items-center text-white`}
            style={{ backgroundColor: `hsl(${hue(values[0], values.length > 0 ? values[1] : 0)}, 50%, 50%)` }}>
            {displayedName}
        </div>
    )
}

export default NameIcon;