//Creare calcolatrice..


let result = document.getElementById('inputText'); // Ottieni il riferimento all'elemento HTML con l'ID 'inputText'

// Funzione per aggiungere numeri o operatori all'input
function calculate(number) {
    return result.value += number;
}



// Funzione per calcolare il risultato
function Result() {
    try {
        result.value = eval(result.value); // Esegue il calcolo utilizzando eval() e aggiorna il valore nell'input
    } catch (err) {
        alert('Errore, operazione non valida!'); // Gestisce eventuali errori e mostra un avviso
    }
}


// Funzione per cancellare l'input
function clr() {
    result.value = "  "; // Cancella il contenuto dell'input
}

// Funzione per eliminare l'ultimo carattere
function del() {
    result.value = result.value.slice(0, -1); // Rimuove l'ultimo carattere dall'input
}

