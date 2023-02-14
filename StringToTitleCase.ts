/*
************************************************** Daniel Hernandez ************************************************
Realizar una función que reciba como parámetro un string y devuelva ese string en Title Case.

Input - string en minuscula
Output - string Title Case

1. Dar un string
2. Se va a llamar una funcion que lo convieta a Title Case
3. Se retorna el resultado

*/

const word1 = "yo quiero taco bell";
const  word2 = "alTErNa AcaDEMy eS lo MEJOR";

function wordToTitleCase(word: string): string {
    word = word.toLowerCase();
    let wordArray = word.split(" ");
    let finalWord = "" ;

    for (let i = 0; i < wordArray.length;  i++){
        finalWord += (wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1).toLowerCase()).toString() + " ";
       
    }
    
    return finalWord.trim();
   
}

console.log(wordToTitleCase(word1));
console.log(wordToTitleCase(word2));