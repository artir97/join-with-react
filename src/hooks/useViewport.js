import { useEffect, useState } from "react";

/**
 * Custom hook to get window width and keep it updated on window resize.
 * 
 * This tutorial explains it well.
 * https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
 * 
 * @returns the current window width
 */
const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { width, height };
}

export default useViewport;