//function should take one arg - array of numbers
//first, adjust all the values in the input array by multiplying them by two
//add all of the numbers together
//return the result

function calculatePower(arrayOfNums) {

    let accumNum = 0;

    for (let i = 0; i < arrayOfNums.length; i++) {
        accumNum += arrayOfNums[i]*2;
    };

    return accumNum;

};

let arrayOfNums = [1, 2, 3];
let power = calculatePower(arrayOfNums);

console.log(power);