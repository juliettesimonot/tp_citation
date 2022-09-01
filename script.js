var quotes = [
    "La valeur d'un homme tient dans sa capacité à donner et non dans sa capacité à recevoir.",
    "Il n'y a point de bonheur sans courage ni de vertu sans combat.",
    "La mode se démode, le style jamais.",
    "On ne voit bien qu'avec le coeur. L'essentiel est invisible pour les yeux",
    "Connais-toi toi-même",
    "Ils ne savaient pas que c'était impossible alors ils l'ont fait.",
    "La terre est bleue comme une orange",
    "On peut rire de tout mais pas avec n'importe qui.",
    "Rien ne se perd, rien ne se crée, tout se transforme.",
    "On n'est pas sérieux, quand on a dix-sept ans"
];

var authors = ["Albert Einstein", "Jean-Jacques Rousseau","Coco Chanel", "Antoine De Saint-Exupéry",  "Socrate", "Mark Twain", "Paul Eluard", "Pierre Desproges", "Antoine Laurent de Lavoisier", "Arthur Rimbaud"];


//Données du DOM
const quoteToChange = document.querySelector('.quote');
const authorToChange = document.querySelector('.author');
const button = document.querySelector('button');


//Nombre random
function getRandomInt() {
    return Math.floor(Math.random() * quotes.length);
  }

//Modifier le texte si quote differente
let currentInt = 0;
function randomQuoteAuthor(){
    nextInt = getRandomInt();
    if(nextInt!=currentInt){
        quoteToChange.textContent = quotes[nextInt];
        authorToChange.textContent = authors[nextInt];
        currentInt=nextInt;
    }  
}

//Modifier le texte au lancement de la page
window.onload = randomQuoteAuthor();


//Modifier le texte au click du bouton
button.addEventListener('click', e=>{
    randomQuoteAuthor();
});