let grandeDiv = document.getElementsByClassName('grandeDiv')[0];
let ajouter = document.getElementsByClassName('ajouter')[0];
let ajout = document.getElementsByClassName('ajout')[0];
let afaire = document.getElementsByClassName('afaire')[0];
let terminer = document.getElementsByClassName('terminer')[0];
let tous = document.getElementsByClassName('tous')[0];
ajouter.addEventListener('click',()=>{
if (ajout.value != "" && ajout.value != " " && ajout.value != "  ") {
    let tache = document.createElement('div');
let P = document.createElement('p');
let divImg = document.createElement('div');
let textP = document.createTextNode(ajout.value);
P.appendChild(textP);
tache.appendChild(P);
tache.appendChild(divImg);
grandeDiv.appendChild(tache);
tache.style.margin = '10px';
tache.style.backgroundColor ='lightgrey'
tache.style.fontSize='30px';
tache.style.color="#ff69b4"
grandeDiv.style.fontFamily="'Courier New', Courier, monospace";
tache.classList.add('afaire');
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
img1.src = "./public/image/validation.png"
img2.src = "./public/image/correction.png "
img3.src = './public/image/icons8-supprimer-100.png'
divImg.appendChild(img1)
divImg.appendChild(img2)
divImg.appendChild(img3)
tache.style.display = 'flex';
divImg.style.display = 'flex';
divImg.style.justifyContent = 'space-around';
divImg.style.alignItems = 'center';
tache.style.justifyContent = 'center';
tache.style.alignItems = 'center';
divImg.style.flex = '2';
P.style.flex = '10';
let i = 0;
let j = 0;
let nouvelleTache = document.createElement('input');
img1.addEventListener('click',()=>{
    if (i ==0) {
        tache.classList.remove('terminer')
        tache.classList.remove('afaire')
        tache.classList.add('terminer');
    }
    if (i == 1) {
        tache.classList.remove('terminer')
        tache.classList.remove('afaire')
        tache.classList.add('afaire');
        i -= 2 ;
    }
    i++ ;
    
});

img3.addEventListener('click',()=>{
    tache.remove();
});

img2.addEventListener('click',()=>{

    if (j == 0) {
        
    
   
    tache.prepend(nouvelleTache);
    nouvelleTache.value = P.innerText
    P.style.visibility = 'hidden';
    };

    if (j == 1) {
        P.innerText = nouvelleTache.value ;
    
        nouvelleTache.remove();
        P.style.visibility = 'visible'
        j-=2 ;
    }
    j++;

});
let button1 = document.getElementsByClassName('afairee')[0];
let button2 = document.getElementsByClassName('terminee')[0];
let button3 = document.getElementsByClassName('tous')[0];

button1.addEventListener('click',()=>{
let taches = document.querySelectorAll('.grandeDiv > div');
taches.forEach(element => {
    if (element.classList.contains('terminer')) {
        element.style.display = "none";
    };
    if (element.classList.contains('afaire')) {
        element.style.display ='flex'
    }
});
});
button2.addEventListener('click',()=>{
let taches = document.querySelectorAll('.grandeDiv > div');
taches.forEach(element => {
    if (element.classList.contains('terminer')) {
        element.style.display = "flex";
    };
    if (element.classList.contains('afaire')) {
        element.style.display ='none'
    }
});
});
button3.addEventListener('click',()=>{
let taches = document.querySelectorAll('.grandeDiv > div');
taches.forEach(element => {
    if (element.classList.contains('terminer')) {
        element.style.display = "flex";
    };
    if (element.classList.contains('afaire')) {
        element.style.display ='flex'
    }
});
});



}

})
console.log(grandeDiv);
