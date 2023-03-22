/*
Yakubovskyi Yevgen IO-03 Task 1
Task:
Convert a number to a binary coded decimal (BCD).

You can assume input will always be an integer. 
If it is a negative number then simply place 
a minus sign in front of the output string. 
Output will be a string with each digit of the input 
represented as 4 bits (0 padded) with a space 
between each set of 4 bits.

Ex.
n =  10 -> "0001 0000"
n = -10 -> "-0001 0000"
*/

function toBCD(num) {
  // Check if the number is negative
  const sign = num < 0 ? '-' : '';
  
  // Convert the number to a string
  const numStr = Math.abs(num).toString();
  
  // Initialize an empty string to hold the BCD value
  let bcd = '';
  
  // Loop through each digit in the number
  for (let i = 0; i < numStr.length; i++) {
    // Convert the digit to its BCD representation
    const bcdDigit = parseInt(numStr[i], 10).toString(2).padStart(4, '0');
    
    // Add the BCD representation to the output string
    bcd += bcdDigit + ' ';
  }
  
  // Remove the trailing space and return the BCD value with the sign
  return sign + bcd.trim();
}

// Run func with data
const bcdValue = toBCD(-123);
console.log(bcdValue); // Output: "0001 0010 0011"