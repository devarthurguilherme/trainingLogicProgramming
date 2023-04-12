const arr1 = [2, 3, 4];
let arr2 = doubleArr(arr1);

function doubleArr(arr) {
    let arrTemp = new Array();

    for(let i = 0; i < arr.length; i++) {
        arrTemp[i] = arr[i] * 2
    };

    return arrTemp;
};

console.log(arr1);
console.log(arr2);