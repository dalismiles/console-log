// Esercizio 1
// Scriviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

const firstNumber = 1;
const secondNumber = 3;

function sumEs1() {
  return firstNumber + secondNumber;
}

console.log(sumEs1());

// ---------------------------------

// Esercizio 2
// Scriviamo una versione migliorata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

const thirdNumber = 1;
const fourthNumber = "miao";

function sumEs2() {
  if (isNaN(thirdNumber) || isNaN(fourthNumber)) {
    console.error("Digita due numeri per ottenere il tuo totale!");
  } else {
    return thirdNumber + fourthNumber;
  }
}

console.log(sumEs2());

// ---------------------------------

// Esercizio 3
// Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma ci deve dire che non posso dividere per 0

const fifthNumber = 2;
const sixthNumber = 0;

function sumEs3() {
  if (isNaN(fifthNumber) || isNaN(sixthNumber)) {
    console.error("Digita due numeri per ottenere il tuo totale!");
  } else {
    return fifthNumber + sixthNumber;
  }
}

function sub() {
  if (isNaN(fifthNumber) || isNaN(sixthNumber)) {
    console.error("Digita due numeri per ottenere il tuo totale!");
  } else {
    return fifthNumber - sixthNumber;
  }
}

function mul() {
  if (isNaN(fifthNumber) || isNaN(sixthNumber)) {
    console.error("Digita due numeri per ottenere il tuo totale!");
  } else {
    return fifthNumber * sixthNumber;
  }
}

function divis() {
  if (sixthNumber === 0) {
    console.error("Hey! Non puoi dividere per zero!");
  } else {
    return fifthNumber / sixthNumber;
  }
}

console.log(sumEs3());
console.log(sub());
console.log(mul());
console.log(divis());

// ---------------------------------

// Esercizio 4
// Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

const seventhNumber = 4;
const eighthNumber = 0;

const calcDivis = function () {
  if (isNaN(seventhNumber) || isNaN(eighthNumber)) {
    console.error("Digita due numeri per ottenere il tuo totale!");
  } else if (eighthNumber === 0) {
    console.error("Errore: non divisibile per zero :(");
  } else {
    return seventhNumber / eighthNumber;
  }
};

console.log(calcDivis());
