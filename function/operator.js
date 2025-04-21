// Example 2: Positive or Negative number
let number = -5;
let numCheck = (number >= 0) ? "संख्या धनात्मक है।" : "संख्या ऋणात्मक है।";
document.write("<p>संख्या: " + number + " → " + numCheck + "</p>");

// Example 3: Check equal numbers
let a = 10;
let b = 20;
let equalityCheck = (a === b) ? "दोनों संख्याएँ बराबर हैं।" : "संख्याएँ अलग हैं।";
document.write("<p>" + a + " और " + b + " → " + equalityCheck + "</p>");

// Example 4: Empty string check
let name = "";
let nameStatus = (name === "") ? "नाम खाली है।" : "नाम दिया गया है।";
document.write("<p>नाम स्थिति: " + nameStatus + "</p>");

// Example 5: Login check
let isLoggedIn = true;
let loginMessage = isLoggedIn ? "आप लॉग इन हैं।" : "आप लॉग इन नहीं हैं।";
document.write("<p>लॉगिन स्थिति: " + loginMessage + "</p>");
