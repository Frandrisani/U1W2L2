/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 3;
let b = 7;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 7;
if (x !== 5) {
  console.log("Not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let c = 10;
let d = c % 5;
if (d === 0) {
  console.log("Divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let e = 12;
let f = 8;
let g = e + f;
if (e === 8 || f === 8 || g === 8) {
  console.log("Almeno un valore è uguale a 8");
} else {
  console.log("nessun valore è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 48;
const costoSpedizione = 10;
const spedizioneGratuita = 50;
if (totalShoppingCart >= spedizioneGratuita) {
  console.log("Costo finale al checkout:" + " " + totalShoppingCart + "E");
} else {
  let costoEffettivo = totalShoppingCart + costoSpedizione;
  console.log("Costo finale al checkout:" + " " + costoEffettivo + "€");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const blackFriday = true;
const sconticinoBlack = 20;
let scontodasottrarre = 0;
let newPrice = totalShoppingCart;
if (blackFriday !== true) {
  console.log("Costo finale al checkout:" + " " + newPrice + "€");
} else {
  scontodasottrarre = (totalShoppingCart * sconticinoBlack) / 100;
  newPrice = totalShoppingCart - scontodasottrarre;
}

if (newPrice >= spedizioneGratuita) {
  console.log("Costo finale al checkout:" + " " + newPrice + "€");
} else {
  let costoEffettivo = newPrice + costoSpedizione;
  console.log("Costo finale al checkout:" + " " + costoEffettivo + "€");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let gigio = 4;
let gigia = 7;
let gigino = 48;
if (gigio > gigia && gigio > gigino && gigia > gigino) {
  console.log(gigio, gigia, gigino);
} else if (gigia > gigio && gigia > gigino && gigio > gigino) {
  console.log(gigia, gigio, gigino);
} else if (gigino > gigio && gigino > gigia && gigio > gigia) {
  console.log(gigino, gigio, gigia);
} else if (gigino > gigio && gigino > gigia && gigia > gigio) {
  console.log(gigino, gigia, gigio);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero = "zio";
if (typeof numero === "number") {
  console.log("è un numero!");
} else {
  console.log("sorry, non è numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numeroDaControllare = 4;
let resto = numeroDaControllare % 2;
if (resto === 0) {
  console.log(numeroDaControllare + " " + "è pari!");
} else {
  console.log(numeroDaControllare + " " + "è dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
 SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
// const me = {
//   name: "John",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"],
// };
/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
array.splice(9, 1, 100);
console.log(array);
