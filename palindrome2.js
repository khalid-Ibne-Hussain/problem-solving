const checkPalindrome = (value) => {
    const reversedValue = value.split("").reverse().join("");

    if (reversedValue == value) {
        return "true";
    }
    else {
        return "false";
        // return false;
    }

}



const value = "never odd or even";
console.log(checkPalindrome(value));