
let prezzoScontato;


/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere */ 

let numeroKm = parseInt (prompt ("Quanti Km vuoi percorrere?"));
console.log(numeroKm);

/* e l’età del passeggero. */ 

let etaPasseggero = parseInt (prompt ("Quanti anni hai?"));
console.log(etaPasseggero);

/* Sulla base di queste informazioni dovrà calcolare il prezzo */

     /*Prezzo totale km percorsi per over 18 e under 65 (Prezzo intero)  */


let prezzoKm = numeroKm * 0.21 ;


     /* Sconto under 18 */

 if (etaPasseggero < 18){
        prezzoScontato = (80 * prezzoKm /100);
        console.log(prezzoScontato.toFixed( 2 ) );
    }
    


     /* Sconto Under 65 */



else if (etaPasseggero > 65){
    prezzoScontato = (60 * prezzoKm /100);
    console.log(prezzoScontato.toFixed( 2 ) );
}

    /*Prezzo intero  */

else{
    prezzoScontato = (prezzoKm);
    console.log(prezzoScontato.toFixed( 2 ) );
}


/* output */


document.getElementById("biglietto").innerHTML = `Il costo del tuo biglietto è: € ${prezzoScontato.toFixed( 2 )}` ;








































