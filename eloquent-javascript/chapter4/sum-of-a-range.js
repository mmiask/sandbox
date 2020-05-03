function range(start, end, step = start <= end ? 1 : -1) {
    let rangeArray = [];
        for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
            rangeArray.push(i);
        };
        return rangeArray;
    };

console.log(range(1, 10));
console.log(range(1, 7, 2));
console.log(range(5, 2));
console.log(range(10, 4, -2));

function sum(givenArray) {
    let sumValue = 0;
    for (let numbers of givenArray) {
        sumValue += numbers;
    };
    return sumValue;
};
console.log(sum(range(1,10)));

