function construct(name) {

    let person = {
        name: name,
        material: 'human',
        assemble: true,
        duration: 1000
    };

    return person;
};

const rachelle = 'Rachelle';

console.log(construct(rachelle));