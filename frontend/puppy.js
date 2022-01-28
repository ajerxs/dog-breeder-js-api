let puppies = []

class Puppy {
    constructor(id, name, breed, price, sex) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.price = price;
        this.sex = sex;
    }
}

// DISPLAY PUPPIES 

function makePuppies(json) {
    let data = json["data"];
    puppies = [];
    for (let i = 0; i < data.length; i++) {
        let obj = new Puppy(data[i]["id"], data[i]["attributes"]["name"], data[i]["attributes"]["breed"], data[i]["attributes"]["price"], data[i]["attributes"]["sex"]);
        puppies.push(obj);
    };
};

function fetchPuppies() {
    fetch('http://127.0.0.1:3000/puppies')
    .then(resp => resp.json())
    .then(json => makePuppies(json))
};

document.getElementById('puppies').addEventListener('click', function() {
    clearPage();
    let p = document.createElement("p");
    p.innerHTML = 'If you can see this, that means the "Puppies" link is working!'
    container.appendChild(p);
});

// function couplesDivs(json) {
//     for (let i = 0; i < couples.length; i++) {
//         let couple = document.createElement("div");
//         couple.classList.add("couple");
//         couple.setAttribute('id', `${couples[i].id}`)

//         let father = document.createElement("p");
//         father.classList.add("couple-contents");
//         father.innerHTML = "<strong>Father: </strong>" + couples[i].father;

//         let mother = document.createElement("p");
//         mother.classList.add("couple-contents");
//         mother.innerHTML = "<strong>Mother: </strong>" + couples[i].mother;

//         let breed = document.createElement("p");
//         breed.classList.add("couple-contents");
//         breed.innerHTML = "<strong>Breed: </strong>" + couples[i].breed;

//         let delButton = document.createElement("button");
//         delButton.classList.add("couple-contents");
//         delButton.classList.add("delete");
//         delButton.innerHTML = "Delete";
//         delButton.onclick = function() {
//             deleteCouple(couples[i]);
//             clearPage();
//         }

//         couple.append(father, mother, breed, delButton);
//         container.appendChild(couple);
//     };
//     let button = document.createElement("button");
//     button.setAttribute('id', 'button');
//     button.innerHTML = "Create New!";

//     container.appendChild(button);
// };