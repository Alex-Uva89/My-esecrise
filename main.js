// Snack 1:
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es:
// ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const arrNomi = ['pippo', 'TOPOLINO', 'Paperino'];
const arrNomiNuovi = [];
const stamp = document.querySelector('.container')

console.log('prima: '+ arrNomiNuovi)
arrNomi.forEach(element => {
    const primalettera = element[0].toUpperCase();
    const restoNome = element.slice(1).toLowerCase();
    arrNomiNuovi.push(primalettera+restoNome);
    console.log('primalettera :'+ primalettera);
    console.log('restonome :'+ restoNome);
});


stamp.innerHTML = `<p>arrNomi: [${arrNomi}] diventano: arrNomiNuovi: [${arrNomiNuovi}]</p>`;



// Snack 2:
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

// const pet = [
//     {   //element 0
//         nome: 'leone', 
//         famiglia: 'felidi', 
//         classe: 'mammiferi' 
//     },
//     {   //element 1
//         nome: 'cane', 
//         famiglia: 'canidi', 
//         classe: 'mammiferi' 
//     },
//     {   //element 2 
//         nome: 'gallina', 
//         famiglia: 'fasianidi', 
//         classe: 'uccelli' 
//     },
//     {   //element 3 
//         nome: 'falco', 
//         famiglia: 'fasianidi', 
//         classe: 'uccelli' 
//     },
//     {   //element 4
//         nome: 'gatto', 
//         famiglia: 'felinidi', 
//         classe: 'mammiferi' 
//     },
//     {   //element 5
//         nome: 'delfino', 
//         famiglia: 'cefalopode', 
//         classe: 'pesci' 
//     },
// ]

// const mammiferi = [];

// console.log('prima ' + mammiferi)

// pet.forEach(element =>{
//     if (element.classe == 'mammiferi'){
//         mammiferi.push(element.nome);
//         console.log('elemento ' + element.nome);
//     }
// })

// console.log('dopo ' + mammiferi);


// Snack 3:
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// const persone = [
//     {
//         nome: 'Manuele',
//         cognome: 'Uva',
//         età: 16
//     },
//     {
//         nome: 'Donatella',
//         cognome: 'Uva',
//         età: 35,
//     },
//     {
//         nome: 'Luigi',
//         cognome: 'Uva',
//         età: 20
//     },
//     {
//         nome: 'Carmelo',
//         cognome: 'Uva',
//         età: 18
//     },
//     {
//         nome: 'Lucia',
//         cognome: 'Uva',
//         età: 11
//     },
//     {
//         nome: 'Kevin',
//         cognome: 'Uva',
//         età: 17
//     },
// ]

// const stamp = document.querySelector('.container')
// const arrSenior = [];
// const arrJunior = [];

// persone.forEach(element =>{
//     if (element.età >= 18) {
//         arrSenior.push(element.nome + ' ' + element.cognome + ' (' + element.età + ' anni) ');
//     } else {
//         arrJunior.push(element.nome + ' ' + element.cognome + ' (' + element.età + ' anni) ')
//     }
// })


// stamp.innerHTML = `<p>Le persone che possono guidare sono:</p>  <p>${arrSenior}</p>
// <p>Mentre quelle che NON possono guidare sono:</p> <p>${arrJunior}</p>`;