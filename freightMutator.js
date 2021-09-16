//Create a function to take an array of strings
//then return the array with each string capitalized

function mutate (cargoItemsArray) {

    const mutatedArray = cargoItemsArray.map(item => item.toUpperCase());

    return mutatedArray;

};

const mutated = mutate(['dog', 'dogs', 'cat']);
console.log(mutated);