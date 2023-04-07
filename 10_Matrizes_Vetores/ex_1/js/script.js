let output = document.querySelector("#output");
let msg = '';

const test = [[1, 2, 3, 8], [4, 5, 6], [7, 8, 9]];
let mediaYear = 0;

for(let i = 0; i < test.length; i++) {
    msg += `<h2>Notes of ${i + 1} Bimester</h2>`;
    msg += `<h3>Your notes are: ${test[i].join(", ")}</h3>`
    let sumTotal = 0;
    let numberNotes = 0;
    for(let j =0; j < test[i].length; j++) {
        sumTotal += test[i][j];
        numberNotes++;
    };
    msg += `<p>Number Notes is: ${numberNotes}</p>`;
    msg += `<p>Total is: ${sumTotal}</p>`;
    msg += `<p>Media is ${sumTotal / numberNotes}</p>`;
    mediaYear += sumTotal;
};
msg += `<h4>Total year is: ${mediaYear}</h4>`;
msg += `<h1>Media year is: ${mediaYear / test.length}</h1>`;
output.innerHTML += msg;