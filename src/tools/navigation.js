export const backOrDefault = (defaultPath) => {
    if (window.history.length > 1)
        return -1;
    return defaultPath;
}

const isLocal = window.location.hostname === 'localhost';
const basePath = isLocal ? '/join-with-react/' : './join-with-react/';

console.log(window.location.hostname);

export const getEnvironmentLink = (link) => {
    return `${basePath}${link}`;
}