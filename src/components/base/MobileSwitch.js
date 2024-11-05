import useViewport from "../../hooks/useViewport";

const MobileSwitch = ({mobileComponent = <></>, desktopComponent = <></>}) => {
    const { isMobile } = useViewport();

    return isMobile() ? mobileComponent : desktopComponent;
}
 
export default MobileSwitch;