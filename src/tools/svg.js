export const handleColorInjection = (svg, predicate, color) => {
    if (predicate()) {
        const svgPaths = svg.querySelectorAll('path');
        svgPaths.forEach(path => path.setAttribute('fill', color));
    }
}