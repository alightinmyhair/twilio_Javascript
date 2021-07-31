function getFirstAmountSorted (inputArray, numberOfItems){
    
    inputArray.sort();

    let newArray = inputArray.slice(0, numberOfItems);

    return newArray;


}