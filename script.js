function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
        // Check if the current character is not repeated
        if (str.charAt(i) !== str.charAt(i - 1) && str.charAt(i) !== str.charAt(i + 1)) {
            return str.charAt(i);
        }
    }
    // If no non-repeated character is found, return null or another appropriate value
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
