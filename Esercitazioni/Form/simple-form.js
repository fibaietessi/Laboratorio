let form = document.querySelector('form');
let submitButtuon = document.querySelector('#invio');
let outputMessage = document.querySelector('#output');
let nomeUtente = document.querySelector('#nomeUtente');
let messaggioUtente = document.querySelector('#messaggio-utente');
let password = document.querySelector('#password');
let charsLeft = document.querySelector('#char-left');

submitButtuon.addEventListener("click", (e) =>  {
    e.preventDefault();
    console.log(e);
    console.dir('form');
})
//prende quello che digito nel campo nome utente e lo mette nella variabile outputMessage
nomeUtente.addEventListener('input', (e) => {
    //console.dir(e.target.maxLength);
    //console.dir(e.target)
    let remainingChars = e.target.maxLength - e.target.value.length;
    //console.log(remainingChars);
    charsLeft.textContent = `${remainingChars} / ${e.target.maxLength}`; 

   //outputMessage.textContent = e.target.value;
})

nomeUtente.addEventListener('focus', () =>{
    console.log("sei entrato nell'input");
})


nomeUtente.addEventListener('blur', () =>{
    console.log("sei uscito nell'input");
})


nomeUtente.addEventListener('change', () =>{
    console.log("l'input è cambiato");
})

messaggioUtente.addEventListener('keyup', (e) => {
        console.dir(e.target.maxLength);
        console.dir(e.target);
        let rimanenti = e.target.maxLength - e.target.value.Length;
    })