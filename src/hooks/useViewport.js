import { useEffect, useState } from "react";

const useViewport = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return window.removeEventListener('resize', handleResize);
    }, []);

    return { width };
}

export default useViewport;