function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=1; i<str.length-1; i++){
        if(str.charAt(i) != str.charAt(i-1) && str.charAt(i) != str.charAt(i+1)){
            return str.charAt(i);
        }
    }
    return str.charAt(str.length);
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
