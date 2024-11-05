/**
 * 
 * @param {*} svg - The svg of the injection methods 
 * @param {string} color The fill color
 * @param {Function} predicate - Takes no parameters, and returns a boolean
 */
export const handleColorInjection = (svg, color, predicate = () => true) => {
    if (predicate()) {
        const svgPaths = svg.querySelectorAll('path');
        svgPaths.forEach(path => path.setAttribute('fill', color));
    }
}