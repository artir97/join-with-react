export const backOrDefault = (defaultPath) => {
    if (window.history.length > 1)
        return -1;
    return defaultPath;
}
