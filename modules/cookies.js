function readCookies() {
    const cookieData = document.cookie
        .split(";")
        .map(part => part.trim().split("="));

    return Object.fromEntries(cookieData);
}

export function getCookie(key) {
    return readCookies()[key];
}

// daysToExpire is optional and if set to null the cookie will be deleted
export function setCookie(key, value, daysToExpire = 30) {
    const expiryDate = daysToExpire !== null 
        ? Date.now() + (daysToExpire * 24 * 60 * 60 * 1000)
        : null;
    document.cookie = `${key}=${value}; expires=${new Date(expiryDate).toUTCString()}`;
}