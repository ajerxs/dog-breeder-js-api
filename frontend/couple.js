document.getElementById('couples').addEventListener('click', function() {
    clearPage();
    testFetch();
});

function testFetch() {
    fetch('http://127.0.0.1:3000/couples')
    .then(resp => resp.json())
    .then(json => fetchFathers(json))
};

function fetchFathers(json) {
    for (let i = 0; i < json["data"].length; i++) {
        let container = document.getElementById('container');

        let couple = document.createElement("div");
        couple.classList.add("couple");

        let father = document.createElement("p");
        father.innerHTML = "<strong>Father: </strong>" + json["data"][i]["attributes"]["father"];

        let mother = document.createElement("p");
        mother.innerHTML = "<strong>Mother: </strong>" + json["data"][i]["attributes"]["mother"];

        let breed = document.createElement("p");
        breed.innerHTML = "<strong>Breed: </strong>" + json["data"][i]["attributes"]["breed"];

        couple.append(father, mother, breed);

        container.appendChild(couple)
    };
};



class Couple {
    constructor(father, mother, breed) {
        this.father = father;
        this.mother = mother;
        this.breed = breed;
    }
}