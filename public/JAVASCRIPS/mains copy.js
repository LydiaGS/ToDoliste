let bouton = document.getElementsByClassName('ajouter')[0]
console.log(bouton);
let input = document.getElementsByClassName("ajout")[0]
console.log(input);

let parentul = document.getElementsByTagName('ul')[0]
console.log(parentul);

let parentsli = document.getElementsByTagName('li')[2]
console.log(parentsli);

function ajouter() {
    let nouveauli = document.createElement("li");
    console.log(nouveauli);

    nouveauli.appendChild(document.createTextNode(input.value));
    parentul.prepend(nouveauli)

    input.value = "";
}

bouton.addEventListener("click", ajouter)