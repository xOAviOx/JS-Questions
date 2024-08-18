
// 1. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is nod t checked for any specific sign. Negative zeros make no mathematical sense.

Answer 1.function makeNegative(num) {
  // Code?
  if(num>0){
    return Number(`-${num}`)
  }else if(num<0){
    return Number(num)
  }else{
    return Number(0)
  }
}
console.log(makeNegative(-42));

// 2.Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

Answer2. function doubleChar(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i]; // Concatenate the character twice
  }
  return result;
}

console.log(doubleChar('String'));

//3.Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

Answer.3 function noSpace(x){
  return x.replace(/ /g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

//4.Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

Answer.function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  const diff = dadYearsOld - 2 * sonYearsOld;
  
  return Math.abs(diff)
}
console.log(twiceAsOld(40, 18));

// 5.Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Answer. // Adding the JadenString method to the String prototype
String.prototype.toJadenCase = function() {
  const words = this.split(' '); // Split the string into an array of words

  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word and append the rest of the word
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  // Join the array of words back into a single string and return it
  return words.join(' ');
};

// Example usage:
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
// Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"

//6.Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

Answer. function max(arr){
  return arr.sort((a,b)=>a-b)[arr.length-1]
}
function min(arr){
  return arr.sort((a,b)=>a-b)[0]
}
console.log(max([4,6,2,1,9,63,-134,566] ))
console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([42, 54, 65, 87, 0] ))
console.log(min([5]))


// 7. Write a function which converts the input string to uppercase.

Answer. function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

console.log(makeUpperCase('avishukla'))

//8.You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

Answer.const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if(distanceToPump<= mpg*fuelLeft){
    return true
  }else{
    return false
  }
};

console.log(zeroFuel(50,25,2));
  
//9. We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
Answers. 
function numberToString(num) {
  // Return a string of the number here!
  const stringNum = String(num)
  return stringNum
}
console.log(numberToString(54));

//10 
// Code as fast as you can! You need to double the integer and return it.

Answer. function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  const double = 2 * i
  return double;
}

console.log(doubleInteger(69))

// 11.Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Answer.function countSheeps(sheep) {
  // TODO
  sheepcounts = 0
  for(let sheepInd of sheep){
    if(sheepInd===true){
      sheepInd = 1
      sheepcounts+=1
    }else{
      sheepInd = 0
      sheepcounts+= 0
    }
  }
  return sheepcounts
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]))

//12.Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Answer.function longest(s1, s2) {
  // Combine both strings
  const combined = s1 + s2;
  
  // Remove duplicates and sort the characters
  const uniqueStr = [...new Set(combined)].sort().join('');
  
  return uniqueStr;
}

// Corrected function call
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
// Expected Output: "abcdefklmopqwxy"

