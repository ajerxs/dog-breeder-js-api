const test  = document.getElementById("test");

document.addEventListener("DOMContentLoaded", () => {
    // testText();
    fetchTest();
});

// function testText() {
//     let test = document.getElementById("test");
//     test.innerHTML = "There should be stuff here.";
// };

function fetchTest() {
    fetch('http://127.0.0.1:3000/couples')
    .then(resp => resp.json())
    .then(json => test.innerText = json["data"][0]["attributes"]["father"]);
};

function makeDiv(stuff) {
    let test = document.getElementById("test");
    test.innerText = "Word.";
};