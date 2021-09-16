//Create a function that accepts an array of strings
//should return a number - result of findings the length of all strings in the input array

function calculateMass(freightItems) {

    let totalMass = 0;

    const reducer = (firstString,currentString) => firstString + currentString;

    freightItems.reduce(reducer, totalMass);

    return totalMass;

};

const cargo = ['cat', 'dog', 'dogs'];

const mass = calculateMass(cargo);