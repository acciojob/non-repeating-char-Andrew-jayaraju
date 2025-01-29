function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1 (non-repeated character)
    for (let i = 0; i < str.length; i++) {
        if (charCount[str.charAt(i)] === 1) {
            return str.charAt(i);
        }
    }

    // If no non-repeated character is found, return null or another appropriate value
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
