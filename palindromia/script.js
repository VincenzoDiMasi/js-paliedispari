console.log('JS OK')

/*Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma*/

//Prendo gli elementi dal DOM
const wordField = document.getElementById('pali');
const buttonElement = document.getElementById('bttn');
const resultElement = document.getElementById('result');
// console.log(buttonElement, wordField);

const wordElement = wordField.value;


function isPalindrome (word) {

    let reversedWord = "";

    for(let i = word.length -1; i >= 0; i--){

        reversedWord += word.charAt(i);
    }

    if (reversedWord.toLowerCase() === word.toLowerCase()){
        console.log(`${word} is palindrome`);
    } else {
        console.log(`${word} isn't palindrome`);
    }
    
    return reversedWord;
}

//isPalindrome (wordElement);

