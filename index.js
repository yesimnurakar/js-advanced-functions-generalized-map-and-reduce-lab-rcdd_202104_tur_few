// Add your functions here
const sourceArray= [1, 2, 3, -9];
const array= [];

function mapToNegativize(array) {
    let result = array.map(function(number){
        return -number ;
})
    return result;
};

function mapToDouble(array) {
    let result = array.map(function(number){
        return number * 2 ;
})
    return result;
};