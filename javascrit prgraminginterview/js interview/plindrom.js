// const reverseString = (str) => str.split('').reverse().join('');

// const isPalindrome = (str) => str === reverseString(str);

// // ✅ Test
// console.log(isPalindrome("madam"));  // true (Palindrome)
// console.log(isPalindrome("hello"));  // false (Not Palindrome)
const reverseString = (str) => str.split('').reverse().join('');

const checkPalindrome = (str) => {
  const reversed = reverseString(str);
    console.log(`Original: ${str}, Reversed: ${reversed}`);

    return str === reversed ? "Palindrome" : "Not Palindrome";

};

// 🔁 Test
console.log(checkPalindrome("madam"));  // Palindrome
console.log(checkPalindrome("hello"));  // Not Palindrome
