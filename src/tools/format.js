/**
 * 
 * @param {string} fullName The raw name
 * @returns The full name capitalized
 */
export const capitalize = (fullName) => {
    return fullName.trim()
        .split(" ")
        .map(name => name.charAt(0).toUpperCase() + name.slice(1))
        .join(" ");
}