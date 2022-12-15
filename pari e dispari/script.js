console.log('JS OK')

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
//Consigli del giorno
// * 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// * 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//Creo la funzione
function getRandom(min, max) {
    const random = Math.floor(Math.random() * (max + 1 - min)) + min;
    return random;
}
function isEven(number) {
    if (isNaN(number)) {
        alert("NOT VALID!");
        return;
    }
    let result = number % 2 === 0 ? "even" : "odd";
    return result;
}


//Prendo gli elementi dal DOM
const form = document.getElementById("form");
const userInput = parseInt(document.getElementById("user").value);
const resultElement = document.getElementById("target");
const winnerElement = document.getElementById("message");

let total = 0;
let message = "";

//Genero event listener
form.addEventListener("submit", function (event) {

    event.preventDefault();
    const userChoice = document.querySelector('input[type=radio]:checked').value;


    //random per cpu
    const cpuNumber = getRandom(1, 5);

    //genero il risultato 
    total += (cpuNumber + userInput);

    if (isEven(total) === userChoice) {
        message += "Hai vinto!";
    } else {
        message += "Hai perso!";
    }

    resultElement.innerText = total;
    winnerElement.innerText = message;
})