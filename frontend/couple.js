document.getElementById('couples').addEventListener('click', function() {
    clearPage();
    let p = document.createElement("p");
    p.innerHTML = 'If you can see this, that means the "Couples" link is working!'
    container.appendChild(p);
    testFetch();
});

function testFetch() {
    fetch('http://127.0.0.1:3000/couples')
    .then(resp => resp.json())
    .then(json => fetchFathers(json))
};

function fetchFathers(json) {
    let fathers = [];
    for (let i = 0; i < json["data"].length; i++) {
        fathers.push(json["data"][i]["attributes"]["father"])
    };
    container = document.getElementById('container');
    let p = document.createElement("p");
    p.innerHTML = fathers;
    container.appendChild(p);
};



class Couple {
    constructor(father, mother, breed) {
        this.father = father;
        this.mother = mother;
        this.breed = breed;
    }

    // fetchFathers() {
    //     fetch('http://127.0.0.1:3000/couples')
    //     .then(resp => resp.json())
    //     .then(json => function(json) {
    //         let fathers = [];
    //         for (let i = 0; i < json["data"].length; i++) {
    //             fathers.push(json["data"][i]["attributes"]["father"])
    //         };
    //         container = document.getElementById('container');
    //         let p = document.createElement("p");
    //         p.innerHTML = fathers;
    //         container.appendChild(p);
    //     });
    // };
}