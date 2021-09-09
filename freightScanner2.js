// const argumentValue = ['contraband', 'pee', 'contraband', 'contraband'];
// const indexes = scan(['dog', 'cat', 'zippers', 'contraband', 'contraband']);

function scan (freightItems){

    let contrabandIndexes = [];

    for(let i = 0; i < freightItems.length; i++){
        if (freightItems[i] === 'contraband'){
            contrabandIndexes.push(i); 
        }

    }

    return contrabandIndexes;
}

// console.log(scan(argumentValue));
// console.log('Contraband Indexes: ' + indexes); 