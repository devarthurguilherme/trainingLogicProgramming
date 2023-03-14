let arr = [1, 2, 7, 8, 6, 5, 3, 4, 0];


function sumPairs(setArray) {

    let sum = 0;
    for(let count = 0; count < setArray.length; count++) {
        if(setArray[count] % 2 === 0) {
            sum += arr[count];
        };
    };

    return sum;
}

sumPairs(arr);
