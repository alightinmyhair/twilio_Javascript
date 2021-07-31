// const argumentValue = ['contraband', 'pee', 'contraband'];


function scan (freightItems){

    let contrabandIndexes = [];

    for(let i = 0; i < freightItems.length; i++){
        if (freightItems[i] == 'contraband'){
            contrabandIndexes.push(freightItems.indexOf[i]);

        }

    }

    return contrabandIndexes;
}

// console.log(scan(argumentValue));