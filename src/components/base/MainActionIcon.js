import ClickableIcon from "./ClickableIcon";

const MainActionIcon = ({ onClick, url, name }) => {
    console.log(onClick);

    return (
        <ClickableIcon
            url={url}
            name={name}
            className="absolute z-10 right-8 bottom-28"
            onClick={onClick} />
    );
}

export default MainActionIcon;