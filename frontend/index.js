let container = document.getElementById('container');
let about = "This app is a Single Page Application designed to track pairs of dogs and their puppies for a dog breeder. This simple app can display, create, and delete couples and puppies using Javascript and Rails. The primary feature is using asynchronous calls through fetch to manipulate the DOM.";

function clearPage() {
    let container = document.getElementById('container');
    container.innerHTML = "";
};

document.getElementById('about').addEventListener('click', function() {
    clearPage();
    
    let h2 = document.createElement("h2");
    h2.innerHTML = "About This App";
    h2.style.textAlign = "center";

    let p = document.createElement("p");
    p.style.textAlign = "center";

    p.innerHTML = about;
    container.append(h2, p);
});

// document.getElementById('user-comments-submit').addEventListener('click', function() {
//     clearPage();
//     let comments = document.getElementById('user-comments-div');
//     comments.innerHTML = "";

//     let p = document.createElement("p");
//     p.innerHTML = document.querySelector('form').elements[0].value;

//     comments.append(p);
//     document.getElementById('user-comments-form').reset();
// })