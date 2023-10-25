// output will be = I1Am2A3Programmer.xDevelopyWebsites.z;


var token = "123xyz";

const upperCaseFirstLetter = (value) => {

    let words = value.split(" ");
    // return words;
    const sentence = words.map(word => {
        // console.log(typeof word);
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    const sentenceArray = sentence;
    const tokenArray = token.split("");
    let finalArray = [];

    for (let i = 0; i < Math.max(tokenArray.length, sentenceArray.length); i++) {
        finalArray.push(sentenceArray[i]);
        if (i < tokenArray.length) {
            finalArray.push(tokenArray[i]);
        }
        // return finalArray.join(" ");
    }

    return finalArray.join("");


    // return tokenArray;


    // return sentence.join(" ");

}



const sentence = "i am a programmer. develop websites.";

console.log(upperCaseFirstLetter(sentence));