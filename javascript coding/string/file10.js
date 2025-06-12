function removeDuplicates(str) {
    return [...new Set(str)].join('');
}
console.log(removeDuplicates("aabbccdde")); // "abcde"
