import useViewport from "../../hooks/useViewport";

 /** It's the laptop threshold from Tailwind. */
const threshold = 1024;

const MobileSwitch = ({mobileComponent = <></>, desktopComponent = <></>}) => {
    const { width } = useViewport();

    console.log(width);
    return width <= threshold ? mobileComponent : desktopComponent;
}
 
export default MobileSwitch;