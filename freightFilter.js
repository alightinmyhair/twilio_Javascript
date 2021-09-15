function scanAndFilter(freightItems, forbiddenString) {
    
    let filteredItems = freightItems.filter((freightItem) => {
        //WILL NOT WORK
        // forbiddenString !== freightItems[freightItem];
        return freightItem !== forbiddenString;
    });
    
    return filteredItems;
};

const filtered = scanAndFilter(['dog', 'cat', 'dogs', 'dog'], 'dog');

console.log('Filtered Items');
console.log(filtered);

