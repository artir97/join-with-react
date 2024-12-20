const hue = (v1, v2) => {
    // console.log(v1, v2, "=>", Math.floor((v1 * 25 + v2) * 255 / (25 * 25)));
    return Math.floor((v1 * 25 + v2) * 255 / (26 * 25));
}

const NameIcon = ({ name, className, large = false }) => {
    const displayedName = name.trim().split(" ").map(n => n.charAt(0).toUpperCase()).join("");
    const values = name.trim().split(" ").map(n => n.charAt(0).toUpperCase().charCodeAt(0) - 64);

    return (
        <div className={`${className} border-2 border-white rounded-full ${large ? "size-20 min-h-20 min-w-20 text-3xl" : "size-11 min-h-11 min-w-11 text-sm"} p-1.5 flex justify-center items-center text-white`}
            style={{ backgroundColor: `hsl(${hue(values[0], values.at(-1))}, 50%, 50%)` }}>
            <p className={large ? (displayedName.length > 2 ? `text-xl` : "text-3xl") : (displayedName.length > 2 ? `text-xs` : `text-sm`)}>{displayedName}</p>
        </div>
    )
}

export default NameIcon;