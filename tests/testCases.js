const countMultipliers = require('../functions/countMultipliers');
const isPalindrome = require('../functions/isPalindrome');

console.log("Multiple Number Test function:");

let numbers = [];

// Test Case 1: Empty Array
numbers = [];
console.log('TEST CASE 1: Empty Array')
console.log(`Count of values that are multiples of both 4 and 6 : ${countMultipliers(numbers).arrMultiploBoth}`);
console.log(`Count of values that are multiples of either 4 or 6: ${countMultipliers(numbers).arrMultiploOr}`);

// Test Case 2: Array with NO Multipliers of 4 or 6
console.log('TEST CASE 2: Array with NO Multipliers')
numbers = [7, 13, 17, 25];
console.log(`Count of values that are multiples of both 4 and 6: ${countMultipliers(numbers).arrMultiploBoth}`);
console.log(`Count of values that are multiples of either 4 or 6: ${countMultipliers(numbers).arrMultiploOr}`);

// Test Case 3: Array with Multipliers of 4 or 6
console.log('TEST CASE 3: Array with Multipliers of 4 or 6')
numbers = [3, 8, 12, 18, 24];
console.log(`Count of values that are multiples of both 4 and 6: ${countMultipliers(numbers).arrMultiploBoth}`);
console.log(`Count of values that are multiples of either 4 or 6: ${countMultipliers(numbers).arrMultiploOr}`);

// Test Case 4: Array with Both Multipliers of 4 and 6
console.log('TEST CASE 4: Array with Both Multipliers of 4 and 6')
numbers = [24, 12, 8, 18, 30, 16,55,100];
console.log(`Count of values that are multiples of both 4 and 6: ${countMultipliers(numbers).arrMultiploBoth}`);
console.log(`Count of values that are multiples of either 4 or 6: ${countMultipliers(numbers).arrMultiploOr}`);

// Test Case 5: Array with duplicate Multipliers
console.log('TEST CASE 5: Array with duplicate Multipliers')
numbers = [24, 12, 8, 18,4,4, 30, 16,16,16,55,100];
console.log(`Count of values that are multiples of both 4 and 6: ${countMultipliers(numbers).arrMultiploBoth}`);
console.log(`Count of values that are multiples of either 4 or 6: ${countMultipliers(numbers).arrMultiploOr}`);

// Test scenarios for isPalindrome function
console.log("\nTesting isPalindrome function:");

// Test Case 1: Empty String
console.log("Test Case 1: Empty String");
let inputString = "";
console.log("Input:", inputString);
console.log("Output:", isPalindrome(inputString)); // Expected: true

// Test Case 2: Palindrome String (Case Insensitive)
console.log("Test Case 2:Palindrome String (Case Insensitive)");
inputString = "Adán";
console.log("Input:", inputString);
console.log("Output:", isPalindrome(inputString)); // Expected: true

// Test Case 3: Non-Palindrome String
console.log("Test Case 3: Non-Palindrome String");
inputString = "Hello";
console.log("Input:", inputString);
console.log("Output:", isPalindrome(inputString)); // Expected: false

// Test Case 4: Palindrome String with Punctuation
console.log("Test Case 4: Palindrome String with Punctuation");
inputString = "A man, a plan, a canal, Panama!";
console.log("Input:", inputString);
console.log("Output:", isPalindrome(inputString)); // Expected: true

// Test case 5: with Caracteres Unicode
console.log("Test case 5: Test with Caracteres Unicode:");
console.log(isPalindrome("ññ") === true);
console.log(isPalindrome("こんにちは") === false);