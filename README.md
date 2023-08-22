# repojavascript_tasks_1_1

### Summary

This project consists of a simple javascript functions CountMultipliers and isPalindrome that is testing with differents 
test cases scenarios.

### Quick Start
```
1.Install visual studio code.
2.Install nodejs
3.Clone the project using `git clone git@github.com:jhosedith/repoJavascript_tasks_1_2.git`
4.Install node modules - `npm install`.
5.To run tests - `node tests/testCases.js` or `node .` 
```
### Tests
When execute the step 3, `run tests`, the following answer should be appear:

**Multiple Number Test function:**

```
TEST CASE 1: Empty Array
Count of values that are multiples of both 4 and 6 :
Count of values that are multiples of either 4 or 6:  

TEST CASE 2: Array with NO Multipliers
Count of values that are multiples of both 4 and 6:
Count of values that are multiples of either 4 or 6:

TEST CASE 3: Array with Multipliers of 4 or 6
Count of values that are multiples of both 4 and 6: ,12,,24
Count of values that are multiples of either 4 or 6: 8,,18

TEST CASE 4: Array with Both Multipliers of 4 and 6
Count of values that are multiples of both 4 and 6: 24,12
Count of values that are multiples of either 4 or 6: ,,8,18,30,16,100

TEST CASE 5: Array with duplicate Multipliers
Count of values that are multiples of both 4 and 6: 24,12
Count of values that are multiples of either 4 or 6: ,,8,18,4,4,30,16,16,16,100

.......................

Testing isPalindrome function:

Test Case 1: Empty String
Input:
Output: true

Test Case 2:Palindrome String (Case Insensitive)
Input: Adán
Output: false

Test Case 3: Non-Palindrome String
Input: Hello
Output: false

Test Case 4: Palindrome String with Punctuation
Input: A man, a plan, a canal, Panama!
Output: true

Test case 5: Test with Caracteres Unicode:
true
false
```
