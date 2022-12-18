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

//Funzioni
function getRandomNumber(min, max){
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

//Prendo gli elementi dal DOM
const form = document.getElementById('pariodispari-form');
const numberField = document.getElementById('number');
const choiceField = document.getElementById('choice');
const result = document.getElementById('result');

//Eventi
form.addEventListener('submit', function(event) {
    event.preventDefault();

    //Recupero i dati dal form
    const userNumber = parseInt(numberField.value.trim());
    const userChoice = choiceField.value;

    //Validazione
    if(isNaN(number) || number < 1 || number > 5){
        alert('NOT VALID');
        return;
    }

    if(!userChoice || (userChoice !== 'even' && userChoice !== 'odd')){
        alert('NOT VALID');
        return;
    }

    //Genero numero casuale
   
})