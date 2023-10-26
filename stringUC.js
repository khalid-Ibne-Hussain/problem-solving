const upperCase = (value) => {
    let words = value.split(" ");

    let value2 = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    return value2.join(" ");

}


let v = "hello programmer."
console.log(upperCase(v));