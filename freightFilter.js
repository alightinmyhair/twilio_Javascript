function scanAndFilter(freightItems, forbiddenString) {

    // filteredItems = freightItems.filter(forbiddenString => 0 < freightItems.length);

    function checkArrayForWord(forbiddenString){

        let filteredItems = [];
        
        for( let i = 0; i < inputArray.length; i++ ) {
            if ( forbiddenString === inputArray[i] ) {
                filteredItems.push(inputArray[i]);
            }
            return filteredItems;
        }

    };

    return filteredItems;

}

const filtered = scanAndFilter(['dog', 'cat', 'dogs', 'dog'], 'dog');

console.log('Filtered Items');
console.log(filtered);