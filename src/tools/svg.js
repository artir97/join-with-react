/**
 * Injects a color into the paths of an SVG file.
 * This is a callback made to be used with a `ReactSVG` component.
 * 
 * Usage example: `<ReactSVG ... beforeInjection={svg => handleColorInjection(svg, 'white', () => isItSupposedToBeWhite)}`.
 * 
 * @param {*} svg - The svg of the injection methods 
 * @param {string} color The fill color
 * @param {Function} [predicate=()=>{}] - Takes no parameters, and returns a boolean. Defaulted to `() => true`.
 * If you use predicate: `() => false`, the injection won't happen.
 * @param {string} [method="fill"] - Styling method to color : defaulted to `"fill"`. `"stroke"` is another possible value.
 */
export const handleColorInjection = (svg, color, predicate = () => true, method = "fill") => {
    if (predicate()) {
        const svgPaths = svg.querySelectorAll('path');
        svgPaths.forEach(path => path.setAttribute(method, color));
    }
}

/**
 * Injects a rotation into the paths of an SVG file.
 * This is a callback made to be used with a `ReactSVG` component.
 * 
 * Usage example: `<ReactSVG ... beforeInjection={svg => handleRotateInjection(svg, 'white', () => isItSupposedToBeWhite)}`.
 * 
 * @param {*} svg - The svg of the injection methods 
 * @param {Number} angle - Angle of the rotation in degrees
 * @param {Function} [predicate=()=>{}] - Takes no parameters, and returns a boolean. Defaulted to `() => true`.
 * If you use predicate: `() => false`, the injection won't happen.
 */
export const handleRotateInjection = (svg, angle, predicate = () => true) => {
    if (predicate()) {
        const svgPaths = svg.querySelectorAll('path');
        svgPaths.forEach(path => {
            path.setAttribute('transform-box', 'fill-box');
            path.setAttribute('transform-origin', 'center');
            path.setAttribute('transform', `rotate(${angle})`);
        });
    }
}