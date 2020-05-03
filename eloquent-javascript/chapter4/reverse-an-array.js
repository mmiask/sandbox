function reverseArray(array){
    newArray = [];
    for (let element of array) {
        newArray.unshift(element);
    };
    return newArray;
};
console.log(reverseArray(['A', 'B', 'C']));

function reverseArrayInPlace(array) {
    let n = 1;
    const length = array.length
    for (i = n; i < length; i++) {
        array.unshift(array[n]);
        array.splice(array[n+1], 1);
        n++;
    };
    return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);