let couples = []

class Couple {
    constructor(father, mother, breed) {
        this.father = father;
        this.mother = mother;
        this.breed = breed;
    }
}


document.getElementById('couples').addEventListener('click', function() {
    clearPage();
    fetchCouples();
    couplesDivs();
});

function makeCouples(json) {
    let data = json["data"];
    for (let i = 0; i < data.length; i++) {
        if (!(couples.find(e => e.father === data[i]["attributes"]["father"]) === couples.find(e => e.mother === data[i]["attributes"]["mother"]) === couples.find(e => e.breed == data[i]["attributes"]["breed"]))) {
            let obj = new Couple(data[i]["attributes"]["father"], data[i]["attributes"]["mother"], data[i]["attributes"]["breed"]);
            couples.push(obj);
        };
    };
}

function fetchCouples() {
    fetch('http://127.0.0.1:3000/couples')
    .then(resp => resp.json())
    .then(json => makeCouples(json))
};

function couplesDivs(json) {
    for (let i = 0; i < couples.length; i++) {
        let container = document.getElementById('container');

        let couple = document.createElement("div");
        couple.classList.add("couple");

        let father = document.createElement("p");
        father.classList.add("couple-contents");
        father.innerHTML = "<strong>Father: </strong>" + couples[i].father;

        let mother = document.createElement("p");
        mother.classList.add("couple-contents");
        mother.innerHTML = "<strong>Mother: </strong>" + couples[i].mother;

        let breed = document.createElement("p");
        breed.classList.add("couple-contents");
        breed.innerHTML = "<strong>Breed: </strong>" + couples[i].breed;

        couple.append(father, mother, breed);

        container.appendChild(couple)
    };
};