//Create a function that accepts an array of strings
//should return a number
//result of findings the length of all strings in the input array

function calculateMass(freightItems) {

    let totalMass = 0;

    totalMass = freightItems.reduce((accumulatorValue, currentValue) => {
        return accumulatorValue + currentValue.length;
    }, totalMass);

    return totalMass;

};

const cargo = ['cat', 'dog', 'dogs'];

const mass = calculateMass(cargo);

console.log(mass);