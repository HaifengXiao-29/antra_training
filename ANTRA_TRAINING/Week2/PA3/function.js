// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

// function reverseNum(num) {
//     var numToString = num.toString();
//     var arr = [];
//     for (var i = 0; i < numToString.length; i++) {
//         arr.unshift(numToString[i]);       // add the new element to the front of the array
//     }
//     return parseInt(arr.join(""));
// }
//
// console.log(typeof(reverseNum(32243)))
// console.log(reverseNum(1121))


 
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// function checkPalindrome(str) {
//     let removeAllSpace = str.replaceAll(' ', '');  // remove all the space in the string
//     let arr = [];
//     for (var i = 0; i < str.length; i++) {
//         arr.unshift(removeAllSpace[i]);              // traverse the string and each time store the element into the front of the array
//     }
//     return arr.join("") === removeAllSpace;
// }
//
// console.log(checkPalindrome("n u rses ru n"))
 
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

// function allComb(str) {
//     let ret = [];
//     for (var i = 0; i < str.length; i++) {
//         for (var j = i + 1; j < str.length + 1; j++) {
//             ret.push(str.slice(i, j));
//         }
//     }
//     return ret;
// }
//
// console.log(allComb("dog"));
//
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function orderedStr(str) {
//     let arr = [];
//     for (var i = 0; i < str.length; i++) {
//         arr.push(str[i]);
//     }
//     return arr.sort().join("");
// }
//
// console.log(orderedStr("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
//
// function capitalizeFirst(str) {
//     let arr = [];
//     for (var i = 0; i < str.length; i++) {
//         if (i == 0) {
//             arr.push(str[i].toUpperCase());
//         }
//         else if (str[i-1] === " ") {
//             arr.push(str[i].toUpperCase());
//         } else {
//             arr.push(str[i]);
//         }
//     }
//     return arr.join("");
// }
//
// console.log(capitalizeFirst("the quick brown fox"));
 
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

// function longestWord(str) {
//     let arr = [];
//     arr = str.split(' ');
//
//     var longest = arr.reduce(function (longest, curr) {
//             return longest.length > curr.length ? longest : curr;
//         });
//     return longest;
// }
//
// console.log(longestWord("Weasd;asdkajdadb Development Tut"));
 
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

// function vowelCounter(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let ret = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             ret++;
//         }
//     }
//     return ret;
// }
//
// console.log(vowelCounter('The quick brown foxaa'));
//
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function checkPrime(num) {
//     if (num <= 3) {
//         return num > 1;
//     } else {
//         for (var i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
//
// console.log(checkPrime(2))

 
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function retType(arg) {
//     return typeof(arg);
// }
//
// console.log(retType("aldjk"))
 
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// function buildMatrix(n) {
//     return Array(n).fill().map(()=>Array(n).fill());
// }
//
// console.log(buildMatrix(9))
 
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

// function secLowAndGreat(arr) {
//     let sortArr = arr.sort();
//     let ret = [];
//     const lowest = arr[0];
//     const highest = arr[arr.length-1];
//
//     for (var i = 1; i < sortArr.length; i++) {
//         if (sortArr[i] > lowest) {
//             ret.push(sortArr[i]);
//             break;
//         }
//     }
//
//     for (var j = sortArr.length-2; j > 0; j--) {
//         if (sortArr[j] < highest) {
//             ret.push(secHigh = sortArr[j]);
//             break;
//         }
//     }
//
//     if (ret.length === 0) {
//         console.log("please enter an valid test case!");
//     }
//
//     return ret;
// }
//
// console.log(secLowAndGreat([1,2,3,4,5,6]))


 
// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// function checkPerfectNum(num) {
//     var divisor = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             divisor += i;           // adds up all the positive divisors
//         }
//     }
//
//     if (num === divisor) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// let a = 28;
// console.log(a + ' is ' + checkPerfectNum(a));
 
// 13. Write a JavaScript function to compute the factors of a positive integer.

// function allFactors(num) {
//     var factors = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }
//
//     return factors;
// }
//
// let a = 17;
//
// console.log(a + '\'s factors are ' + allFactors(a));
 
// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

// function amountTocoins(amt, coins) {
//     let ret = [];
//     coins.sort(function(a,b){return b-a})
//     for (let i = 0; i < coins.length; i++) {
//         if (amt >= coins[i]) {
//             amt = amt - coins[i];
//             ret.push(coins[i]);
//             i--;
//         }
//     }
//     return ret;
// }
//
// console.log(amountTocoins(46, [25, 10, 5, 2, 1]))
 
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

// function computeExponent(n, b) {
//     return Math.pow(n, b);
// }
//
// console.log(computeExponent(2, 10));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

// function extractChar(str) {
//     let ret = '';
//     for (const c of str) {
//         if (!ret.includes(c)) {
//             ret += c;
//         }
//     }
//     return ret;
// }
//
// console.log(extractChar("thequickbrownfoxjumpsoverthelazydog"));

 
// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

// function occurrences(str) {
//     var ret = {};
//     let letters = '';
//     for (const c of str) {
//         if (!letters.includes(c)) {
//             ret[c] = 1;
//             letters += c;
//         } else {
//             ret[c] = ret[c] + 1;
//         }
//     }
//     return ret;
// }
//
// console.log(occurrences("abccdccdd"));


// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length-1;
//
//     while((right - left) > 0){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid]===target){
//             return mid;
//         } else if(arr[mid]>target){
//             right = mid-1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// }
//
//
// console.log(binarySearch([1,2,3,4,5,6,7],4))

 
// 19. Write a JavaScript function that returns array elements larger than a number.
//
// function largers(arr, num) {
//     let ret = [];
//     for (const e of arr) {
//         if (e > num) {
//             ret.push(e);
//         }
//     }
//     return ret;
// }
//
// console.log(largers([1,2,3,4,5,6], 5));
 
// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//
// function generatesId(str, len) {
//     let ret = '';
//     for (let i = 0; i < len; i++) {
//         ret += str.charAt(Math.floor( Math.random() * str.length));
//     }
//     return ret;
// }
//
// console.log(generatesId("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 8));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

// function allSubsets(arr, sub_len) {
//     let ret = [[]];
//     let curr = [];
//
//     for (let e of arr) {
//         curr = [];
//         for (let entry of ret) {
//             curr.push([...entry, e]);
//         }
//         ret.push(...curr);
//     }
//     return ret.filter(x => x.length === sub_len);
// }
//
// console.log(allSubsets([1,2,3], 2));
 
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

// function occurrCounter(str, char) {
//     let ret = 0;
//     for (const c of str) {
//         if (c === char) {
//             ret++;
//         }
//     }
//     return ret;
// }
//
// console.log(occurrCounter('microsoft.com', 'o'));
 
// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

// function notRepeatChar(str) {
//     let dict = {};
//     let ret = '';
//     let letters = '';
//     for (const c of str) {
//         if (!letters.includes(c)) {
//             dict[c] = 1;
//             letters += c;
//         } else {
//             dict[c] = dict[c] + 1;
//         }
//     }
//     for (const key in dict) {
//         if(dict[key] === 1) {
//             ret = key;
//             break;
//         }
//     }
//     return ret;
// }
//
// console.log(notRepeatChar('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
//
// function bubbleSort(arr) {
//     let max = arr.length - 1;
//     for (let i = 0; i < max; i++) {
//         let finish = true;
//         for (let j = 0; j < max - i; j++) {
//             if (arr[j] < arr[j+1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 finish = false;
//             }
//         }if (finish) break;
//     }
//     return arr;
// }
//
// console.log(bubbleSort( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
 
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// function Longest_Country_Name(countries) {
//     return countries.reduce(function(a,b) {
//         if (a.length > b.length) {
//             return a;
//         } else {
//             return b;
//         }
//     });
// }
//
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America", "asjdlasj"]));
//
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// function longestNonrepeatStr(str) {
//     let chars = str.split('');  // get all the chars in the given string to compare
//     let curr_char;
//     let string = "";
//     let longest_string = "";
//     let hash = {};              // use a hash table to store all appeared char and appearance
//     for (let i = 0; i < chars.length; i++) {
//         curr_char = chars[i];
//         if (!hash[chars[i]]) {
//             string += curr_char;
//             hash[chars[i]] = {index:i};
//         } else {
//             if(longest_string.length <= string.length) {
//                 longest_string = string;
//             }
//             let prev_dupeIndex = hash[curr_char].index;
//             let str_FromPrevDupe = str.substring(prev_dupeIndex + 1, i);
//             string = str_FromPrevDupe + curr_char;
//             hash = {};
//             for (let j = prev_dupeIndex + 1; j <= i; j++) {
//                 hash[str.charAt(j)] = {index:j};
//             }
//         }
//     }
//     if (longest_string.length > string.length) {
//         return longest_string;
//     } else {
//         return string;
//     }
// }
//
// console.log(longestNonrepeatStr("abcdefga"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// function longestPalindrome(str) {
//     let longest = '';
//
//     for (let i = 0; i < str.length; i++) {
//         helper(i, i);
//         helper(i, i+1);
//     }
//
//     function helper(left, right) {
//         while (left >= 0 && right < str.length && str[left] === str[right]) {
//             if (right - left + 1 > longest.length) {
//                 longest = str.slice(left, right + 1);
//             }
//             left--;
//             right++;
//         }
//     }
//     return longest;
// }
//
//
// console.log(longestPalindrome("cbbd"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
// function passParameter(fn) {
//     return fn.name;
// }
//
// console.log(passParameter(function a(){}));

// 29. Write a JavaScript function to get the function name.

 // function getName(fn) {
 //     return fn.name;
 // }
 // console.log(getName(function b(){}));