// const argumentValue = ['contraband', 'pee'];

function scan (cargoItemsArray){

    let contrabandCount = 0;

    for(let i = 0; i < cargoItemsArray.length ; i++){
        // console.log(cargoItemsArray[i]);
        if(cargoItemsArray[i] == 'contraband'){
            contrabandCount++;
        }
    }

    return contrabandCount;

}

// console.log(scan(argumentValue));