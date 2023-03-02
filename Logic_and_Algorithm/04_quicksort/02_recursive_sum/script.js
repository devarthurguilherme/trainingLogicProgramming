function sum(list) {
    if (list.length === 0) {
        return 0;
    } else {
        return list[0] + sum(list.slice(1));
    }
}

console.log(sum([1, 2, 3, 4]));

/*
p 115
slice method: It basicly catchs a initial index (for parameter) 
and creates a new array "shadow", but final index not is included
*/

console.log("Learning Slice");
const example = ["Arthur", "Guilherme", "Souza", "Silva"];
const exampleWithSlice = example.slice(1);
console.log("Example With Slice");
console.log(exampleWithSlice);