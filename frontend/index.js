let container = document.getElementById('container');

function clearPage() {
    let container = document.getElementById('container');
    container.innerHTML = "";
};

document.getElementById('about').addEventListener('click', function() {
    clearPage();
    let p = document.createElement("p");
    p.innerHTML = 'If you can see this, that means the "About" link is working!'
    container.appendChild(p);
});