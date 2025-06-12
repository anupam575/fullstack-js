function mostFrequentChar(str) {
    let map = {};
    for (let ch of str) {
        map[ch] = (map[ch] || 0) + 1;
    }
    let max = 0, char = '';
    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            char = key;
        }
    }
    return char;
}
console.log(mostFrequentChar("aabbbccccd")); // "c"
