let output = document.querySelector("#output");
let msg = '';
msg += "";

const Class = [
    {n: "Arthur", notes: [3, 8, 5, 7]},
    {n: "Alex", notes: [8, 4, 2, 0]},
    {n: "Thavia", notes: [3, 2, 0, 7]},
    {n: "Lea", notes: [1, 7, 6, 8]}
];

for(let i = 0; i < Class.length; i++) {
    msg += `<h2>Name: ${Class[i].n}</h2>`;
    msg += `<p>Notes are: ${Class[i].notes.join(", ")}</p>`;
    let totalNotes = 0;
    let media = 0;
    for(let j = 0; j < Class[i].notes.length; j++) {
        totalNotes += Class[i].notes[j];
        media++;
    };
    msg += `<p>Total is: ${totalNotes}</p>`;
    msg += `<p>Media is: ${totalNotes / media}</p>`;
    msg += "<hr />";
}

function display(m) {
    output.innerHTML = m;
};

display(msg);