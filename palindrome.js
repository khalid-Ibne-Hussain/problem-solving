const str1 = "madama";

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