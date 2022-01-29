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
    fetchPuppies();
    puppiesDivs();
});

function puppiesDivs() {
    for (let i = 0; i < puppies.length; i++) {
        let puppy = document.createElement("div");
        puppy.classList.add("puppy");
        puppy.setAttribute('id', `${puppies[i]}.id`);

        let name = document.createElement("p");
        name.classList.add("puppy-contents");
        name.innerHTML = "<strong>Name: </strong>" + puppies[i].name;

        let breed = document.createElement("p");
        breed.classList.add("puppy-contents");
        breed.innerHTML = "<strong>Name: </strong>" + puppies[i].breed;

        let price = document.createElement("p");
        price.classList.add("puppy-contents"); 
        price.innerHTML = "<strong>Price: </strong>$" + puppies[i].price;

        let sex = document.createElement("p");
        sex.classList.add("puppy-contents");
        sex.innerHTML = "<strong>Sex: </strong>" + puppies[i].sex;

        puppy.append(name, breed, price, sex);
        container.appendChild(puppy);
    };
    let button = document.createElement("button");
    button.setAttribute('id', 'button');
    button.innerHTML = "Create New!";

    container.appendChild(button);
};

// NEW PUPPY FORM 

function newCoupleButton() {
    document.getElementById('button').addEventListener('click', function() {
        clearPage();
        // makePuppyForm();
    });
};

