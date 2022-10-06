const log = (exercise, ...messages) => {
    console.log(
        "\n---------- EXTRA EXERCISE " + exercise + " ---------\n",
        messages.join("\n")
    );
};

// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
let normalArr = [1, 3, 5];
let reverseArr = [...normalArr].reverse(); //.reverse() is destructive, so we need to create a copy of the array first before assigning it to a variable

log(1, "Normal array:", normalArr, "Reversed array:", reverseArr);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
let numbers = [412, 56, 45, 51, 57, 15, 872, 15];

let highest = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
}

log(2, "Numbers:", numbers, "Max:", highest);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
let lowest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

log(3, "Numbers:", numbers, "Min:", min);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */
let evenNumbers = numbers.filter((number) => number % 2 === 0); //filter method with modulo operator to check if the number is even, any element that returns true will pass the filter
log(4, "Numbers:", numbers, "Even numbers:", evenNumbers);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */
let oddNumbers = numbers.filter((number) => number % 2 !== 0); //filter method with modulo operator to check if the number is odd, any element that returns true will pass the filter
log(5, "Numbers:", numbers, "Odd numbers:", oddNumbers);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */
let string = "This is a string with vowels";
let vowelRegex = /[aeiou]/gi; //regex to match all vowels, g flag to match all occurrences, i flag to ignore case
let noVowels = string.replace(vowelRegex, ""); //replace method to replace all vowels with an empty string

log(6, "String:", string, "No vowels:", noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */
let numbers2 = [412, 56, 45, 51, 57, 15, 872, 15];
let numbers2Plus1 = numbers2.map((number) => number + 1); //map method to iterate over the array and add 1 to each element

log(7, "Numbers:", numbers2, "Numbers + 1:", numbers2Plus1);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
let words = ["strive", "is", "great"];
let wordsLength = words.map((word) => word.length); //map is a method that loops the array and returns a new array with the return values

log(8, "Words:", words, "Words length:", wordsLength);
