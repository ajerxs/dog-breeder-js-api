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
        let obj = new Puppy(data[i]["id"], data[i]["attributes"]["name"], data[i]["attributes"]["breed"], data[i]["attributes"]["price"], data[i]["attributes"]["sex"], );
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
    fetchCouples();
    puppiesDivs();
    newPuppyButton();
});

function puppiesDivs() {
    for (let i = 0; i < puppies.length; i++) {
        let puppy = document.createElement("div");
        puppy.classList.add("puppy");
        puppy.classList.add("shadow")
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

        let delButton = document.createElement("button");
        delButton.classList.add("puppy-contents");
        delButton.classList.add("delete");
        delButton.classList.add("btn")
        delButton.classList.add("btn-secondary")
        delButton.innerHTML = "Delete";
        delButton.onclick = function() {
            deletePuppy(puppies[i]);
            clearPage();
        }

        puppy.append(name, breed, price, sex, delButton);
        container.appendChild(puppy);
    };
    let button = document.createElement("button");
    button.setAttribute('id', 'button');
    button.classList.add("btn")
    button.classList.add("btn-outline-info")
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
    let h2 = document.createElement("h2");
    h2.innerHTML = "New Puppy Form:"

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

    let couple = document.createElement("select");
    couple.classList.add("puppy-form");
    couple.setAttribute("name", "couple");
    for (let i = 0; i < couples.length; i++) {
        let opt = document.createElement("option");
        opt.value = couples[i].id;
        opt.text = `Father: ${couples[i].father}, Mother: ${couples[i].mother}`;
        couple.add(opt); 
    };

    let submit = document.createElement("button");
    submit.type = "submit"
    submit.innerHTML = "Submit"
    submit.classList.add("couple-form");
    submit.classList.add("btn");
    submit.classList.add("btn-outline-info")
    submit.setAttribute("id", "submit");

    form.append(name, br.cloneNode(), breed, br.cloneNode(), price, br.cloneNode(), sex, br.cloneNode(), couple, br.cloneNode(), submit);
    container.append(h2, form);

// POST NEW COUPLE

    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        postPuppy();
        clearPage();
    });
};

function postPuppy() {
    let formData = {
        name: document.querySelector('form').elements[0].value,
        breed: document.querySelector('form').elements[1].value,
        price: document.querySelector('form').elements[2].value,
        sex: document.querySelector('form').elements[3].value,
        couple_id: document.querySelector('form').elements[4].value
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    fetch("http://127.0.0.1:3000/puppies", configObj)
        .then(function(response){
            return response.json();
        })
        .then(function() {
            alert("You have successfully added a new puppy! Congratulations on the new family!");
        })
};

function deletePuppy(puppy) {
    let configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            id: puppy.id
        })
    };

    fetch(`http://127.0.0.1:3000/puppies/${puppy.id}`, configObj)
    .then(resp => resp.text())
    .then(resp => alert("You have successfull deleted this puppy."));
};