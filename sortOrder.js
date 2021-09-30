//script will take 2 command line args 
//which will be a pair of strings
//the strings will need to be compared
//NOTE: Letter casing is not important

const firstArgumentValue = process.argv[2];
const secondArgumentValue = process.argv[3];

if ( firstArgumentValue.toLowerCase() < secondArgumentValue.toLowerCase() ) {
    console.log(-1);

} else if ( firstArgumentValue.toLowerCase() === secondArgumentValue.toLowerCase() ) {
    console.log(0);

} else {
    console.log(1);
}

