let registration = [
    {userName: "Arthur Guilherme", userEmail: "arthurguilherme@hotmail.com"},
    {userName: "Thavea Santos", userEmail: "thaveaSantos@hotmail.com"},
    {userName: "Alexander Jr", userEmail: "alexJr@hotmail.com"}
];

let output = document.querySelector("#output");
let msg = "";

for(let count = 0; count < registration.length; count++) {
    msg += `<h2>Name: ${registration[count].userName}</h2>`;
    msg += `<p>email: ${registration[count].userEmail}</p>`;
    msg += "<hr />";
}

output.innerHTML += msg;