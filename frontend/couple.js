let couples = []
let container = document.getElementById('container');

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
    newCoupleButton();
});

function makeCouples(json) {
    let data = json["data"];
    couples.length = 0;
    for (let i = 0; i < data.length; i++) {
        let obj = new Couple(data[i]["attributes"]["father"], data[i]["attributes"]["mother"], data[i]["attributes"]["breed"]);
        couples.push(obj);
    };
};

function fetchCouples() {
    fetch('http://127.0.0.1:3000/couples')
    .then(resp => resp.json())
    .then(json => makeCouples(json))
};

function couplesDivs(json) {
    for (let i = 0; i < couples.length; i++) {
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
        container.appendChild(couple);
    };
    let button = document.createElement("button");
    button.setAttribute('id', 'button');
    button.innerHTML = "Create New!";

    container.appendChild(button);
};

// NEW COUPLE FORM

function newCoupleButton() {
    document.getElementById('button').addEventListener('click', function() {
        clearPage();
        makeCoupleForm();
    });
};

function makeCoupleForm() {
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "http://127.0.0.1:3000/couples");

    let br = document.createElement("br");

    let father = document.createElement("input");
    father.classList.add("couple-form");
    father.setAttribute("type", "text");
    father.setAttribute("name", "father")
    father.setAttribute("placeholder", "Father");

    let mother = document.createElement("input");
    mother.classList.add("couple-form");
    mother.setAttribute("type", "text");
    mother.setAttribute("name", "mother");
    mother.setAttribute("placeholder", "Mother")

    let breed = document.createElement("input");
    breed.classList.add("couple-form");
    breed.setAttribute("type", "text");
    breed.setAttribute("name", "breed");
    breed.setAttribute("placeholder", "Breed");

    let submit = document.createElement("input");
    submit.classList.add("couple-form");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

    form.append(father, br.cloneNode(), mother, br.cloneNode(), breed, br.cloneNode(), submit);
    container.appendChild(form);
};

