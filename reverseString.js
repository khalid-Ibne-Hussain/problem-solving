const string = "Hello";

const reverseString = (word) => {
    return word.split("").reverse().join("");
}

console.log(reverseString(string));