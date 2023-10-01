// function convertKmsToMiles(km) {
//     const miles = km * .62;
//     return miles;
// }
const convertKmsToMiles = (km) => {
    const miles = km * .62;
    return miles;
}

// const kmInput = prompt("Enter length in km:");
// const kMeters = parseFloat(kmInput)
const kMeters = 20;

if (!isNaN(kMeters)) {
    const miles = convertKmsToMiles(kMeters);
    console.log(`${kMeters} Km = ${miles} Miles`);
}
else {
    console.log("Invalid input");
}