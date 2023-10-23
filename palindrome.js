const str1 = "never odd or even";

const palindromeCheck = (word) => {
    const reversedWord = word.split("").reverse().join("");
    if (reversedWord == word) {
        return `${word} is Palindrome`
    }
    else {
        return "Not Palindrome."
    }
}

console.log(palindromeCheck(str1));

// function StringChallenge(str) {
//     // Remove non-alphabetic characters and spaces, and convert to lowercase
//     const cleanStr = str.replace(/[^a-z]/gi, '').toLowerCase();

//     // Reverse the cleaned string
//     const reversedStr = cleanStr.split('').reverse().join('');

//     // Check if the cleaned string is the same when read backward
//     if (cleanStr === reversedStr) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }

// // Test cases
// console.log(StringChallenge("never odd or even")); // Output: true
// console.log(StringChallenge("hello world")); // Output: false
