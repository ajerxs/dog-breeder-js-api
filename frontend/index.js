const test  = document.getElementById("test");

document.addEventListener("DOMContentLoaded", () => {
    // fetchTest();
});

// function fetchTest() {
//     fetch('http://127.0.0.1:3000/couples')
//     .then(resp => resp.json())
//     .then(json => makeDiv(json));
// };

// function makeDiv(json) {
//     let test = document.getElementById("test");
//     test.innerText = json["data"][0]["attributes"]["father"];
// };

// ('about').observe('click', function(event) {
//     Event.stop(event)
// })

document.getElementById('about').addEventListener('click', function() {
    clearPage();
    let p = document.createElement("p");
    p.innerHTML = 'If you can see this, that means the "About" link is working!'
    container.appendChild(p);
});

function clearPage() {
    let container = document.getElementById('container');
    container.innerHTML = "";
};