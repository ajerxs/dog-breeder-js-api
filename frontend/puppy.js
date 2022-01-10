document.getElementById('puppies').addEventListener('click', function() {
    clearPage();
    container.innerHTML = "";
    let p = document.createElement("p");
    p.innerHTML = 'If you can see this, that means the "Puppies" link is working!'
    container.appendChild(p);
});