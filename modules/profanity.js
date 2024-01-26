const filtered_words = [
    "abc123",
    "röv",
    "kuk",
    "fitta",
    "hora",
    "fuck",
    "cunt",
    "dick",
];
const pattern = new RegExp(`(${filtered_words.join('|')})`, "ig");

export function profanityFilter(sentence) {
    let arr = [];
    let filtered = JSON.parse(JSON.stringify(sentence));
    while ((arr = pattern.exec(sentence)) !== null) {
        const match = arr[0];
        const idx = arr.index;
        const first = filtered.slice(0, idx + 1);
        const stars = "*".repeat(match.length - 2);
        const last = filtered.slice(idx + (match.length - 1));
        filtered = `${first}${stars}${last}`;
    }

    return filtered;
}