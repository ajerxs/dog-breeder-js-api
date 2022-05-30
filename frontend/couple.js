let couples = []

class Couple {
    constructor(id, father, mother, breed) {
        this.id = id;
        this.father = father;
        this.mother = mother;
        this.breed = breed;
    }
}

// DISPLAY COUPLES

document.getElementById('couples').addEventListener('click', function() {
    clearPage();
    fetchCouples();
    couplesDivs();
    newCoupleButton();
});

function makeCouples(json) {
    let data = json["data"];
    couples = [];
    for (let i = 0; i < data.length; i++) {
        let obj = new Couple(data[i]["id"], data[i]["attributes"]["father"], data[i]["attributes"]["mother"], data[i]["attributes"]["breed"]);
        couples.push(obj);
    };
};

function fetchCouples() {
    fetch('http://127.0.0.1:3000/couples')
    .then(resp => resp.json())
    .then(json => makeCouples(json))
};

function couplesDivs() {
    for (let i = 0; i < couples.length; i++) {
        let couple = document.createElement("div");
        couple.classList.add("couple");
        couple.classList.add("shadow")
        couple.setAttribute('id', `${couples[i].id}`)

        let father = document.createElement("p");
        father.classList.add("couple-contents");
        father.innerHTML = "<strong>Father: </strong>" + couples[i].father;

        let mother = document.createElement("p");
        mother.classList.add("couple-contents");
        mother.innerHTML = "<strong>Mother: </strong>" + couples[i].mother;

        let breed = document.createElement("p");
        breed.classList.add("couple-contents");
        breed.innerHTML = "<strong>Breed: </strong>" + couples[i].breed;

        let delButton = document.createElement("button");
        delButton.classList.add("couple-contents");
        delButton.classList.add("delete");
        delButton.innerHTML = "Delete";
        delButton.onclick = function() {
            deleteCouple(couples[i]);
            clearPage();
        }

        couple.append(father, mother, breed, delButton);
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
    let h2 = document.createElement("h2");
    h2.innerHTML = "New Couple Form:";

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
    submit.setAttribute("id", "submit");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

    form.append(father, br.cloneNode(), mother, br.cloneNode(), breed, br.cloneNode(), submit);
    container.append(h2, form);

// POST NEW COUPLE

    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        postCouple();
        clearPage();
    });
};

function postCouple() {
    let formData = {
        father: document.querySelector('form').elements[0].value,
        mother: document.querySelector('form').elements[1].value,
        breed: document.querySelector('form').elements[2].value
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    fetch("http://127.0.0.1:3000/couples", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            alert("You have successfully added a new and loving couple!");
        })
};

// DELETE

function deleteCouple(couple) {
    let configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            id: couple.id
        })
    };

    fetch(`http://127.0.0.1:3000/couples/${couple.id}`, configObj)
    .then(resp => resp.text())
    .then(resp => alert("You have successfull deleted this couple."));
};