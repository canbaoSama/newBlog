export function getCookieFeild(key) {
    const res = document.cookie.split(';').map((item) => {
        const s = item.trim().split('=');
        return { key: s[0], value: s[1] };
    }).filter(item => item.key === key);
    if (res[0]) return res[0].value;
    return null;
}