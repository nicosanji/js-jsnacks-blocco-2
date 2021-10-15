// ESERCIZIO 1
// crea un numero random , controlla se è pari o dispari con un output diverso

const mioNumero = Math.ceil(Math.random() * 100);
console.log("ES.1 = Il tuo numero è: " + mioNumero);
if (mioNumero % 2 === 0) {
    console.log("Il numero è pari");
} else {
    console.log("Il numero è dispari");
    console.log(mioNumero + 1);
}

// ESERCIZIO 2 
// crea due array che hanno n° di elementi diversi
// aggiungi elementi all'array + corto finchè non ne avrà tanti quanto quello + lungo

const array1 = [15, 2, 7];
const array2 = [5];

let arrayPiccolo;
let arrayGrande;

// controllo lunghezza array
// se l'array1 è lungo quanto l'array2 = fine;
if (array1.length === array2.length) {
    console.log('I due array sono di uguale lunghezza. FINE !')
    arrayPiccolo = array1;
    arrayGrande = array2;
}
// altrimenti, se l'array1 è + piccolo del array2
else if (array1.length < array2.length) {
    // etichetto l'array1 come il più piccolo tra i due
    arrayPiccolo = array1;
    arrayGrande = array2;
    console.log("array1 < array2");
}
// altrimenti, se l'array2 è + piccolo del array1
else {
    // etichetto l'array2 come il più piccolo tra i due
    arrayPiccolo = array2;
    arrayGrande = array1;
    console.log("ES.2 = array2 < array1");
}

// calcolo la differenza tra i due array
const differenza = arrayGrande.length - arrayPiccolo.length

// aggiungo tanti elementi all'array + corto rispetto a quanto è la differenza tra i due array
for (let i = 0; i < differenza; i++){
    arrayPiccolo.push(0);
}

console.log(arrayGrande, arrayPiccolo);



