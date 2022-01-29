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
    newPuppyButton();
});

function puppiesDivs() {
    for (let i = 0; i < puppies.length; i++) {
        let puppy = document.createElement("div");
        puppy.classList.add("puppy");
        puppy.setAttribute('id', `${puppies[i].id}`);

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

function newPuppyButton() {
    document.getElementById('button').addEventListener('click', function() {
        clearPage();
        makePuppyForm();
    });
};

function makePuppyForm() {
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "http://127.0.0.1:3000/puppies");

    let br = document.createElement("br");

    let name = document.createElement("input");
    name.classList.add("puppy-form");
    name.setAttribute("type", "text");
    name.setAttribute("name", "name")
    name.setAttribute("placeholder", "Name");

    let breed = document.createElement("input");
    breed.classList.add("puppy-form");
    breed.setAttribute("type", "text");
    breed.setAttribute("name", "breed");
    breed.setAttribute("placeholder", "Breed")

    let price = document.createElement("input");
    price.classList.add("puppy-form");
    price.setAttribute("type", "number");
    price.setAttribute("name", "breed");
    price.setAttribute("placeholder", "Price");

    let sex = document.createElement("input");
    sex.classList.add("puppy-form");
    sex.setAttribute("type", "text");
    sex.setAttribute("name", "sex");
    sex.setAttribute("placeholder", "Sex");

    let submit = document.createElement("input");
    submit.classList.add("puppy-form");
    submit.setAttribute("id", "submit");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

    form.append(name, br.cloneNode(), breed, br.cloneNode(), price, br.cloneNode(), sex, br.cloneNode(), submit);
    container.appendChild(form);

// POST NEW COUPLE

    // document.getElementById('submit').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     postCouple();
    //     clearPage();
    // });
};
