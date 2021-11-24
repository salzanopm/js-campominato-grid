// Creare in JavaScript una griglia 8x8. Ogni cella della 
// griglia contiene un numero casuale da 1 a 64. I numeri presenti 
// nelle celle non devono essere ripetuti (ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

// Ogni volta che clicco su un quadrato questo si colora di 
// verde se il numero contenuto e pari e in rosso se dispari.
document.getElementById('play').addEventListener('click', startGame);

function startGame() {
    // CREARE LA GRIGLIA CON GLI SQUARE
    // Crearmi un array di numeri casuali e non ripetuti da 1 a 64
    let numberOfSquares= 0;
    const numberOfSquaresEasy = 100;
    const numberOfSquaresHard = 81;
    const numberOfSquaresCrazy = 49;
    if (document.getElementById("mode-select").selectedIndex = 0) {
        numberOfSquares === numberOfSquaresEasy;
    } else if (document.getElementById("mode-select").selectedIndex = 1) {
        numberOfSquares === numberOfSquaresHard;
    } else {
        numberOfSquares === numberOfSquaresCrazy;
    }
    // cambio valore in base a difficoltà

    let generatedNumbers = generateSquaresNumbers(numberOfSquares);

    // Per ogni numero nell'array, creo una cella e la appendo al grid container
    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';
    for(let i = 0; i < generatedNumbers.length; i++) {
        const thisNumber = generatedNumbers[i];
        const newGeneratedSquare = generateGridItem(thisNumber);

        // Attacco l'evento allo square
        newGeneratedSquare.addEventListener('click', handleSquareClick);
        
        // Aggiungo l'elemento alla griglia
        mainGrid.appendChild(newGeneratedSquare);
    }
}

// AL CLICK SU OGNI SQUARE
// AGGIUNGO LA CLASSE ACTIVE ALLO SQUARE SU CUI HO CLICCATO E LA CLASSE EVEN O ODD IN BASE SE IL CONTENUTO 
// E' PARI O DISPARI
// -----------
// FUNZIONI LEGATE AL DOM
// -----------
function handleSquareClick() {
    this.classList.add('active');
    const thisSquareNumber = parseInt( this.querySelector('span').textContent );

    
        this.classList.add('square--selected');
    
}

// -----------
// FUNCTIONS
// -----------

// Creare un elemento della griglia
// number -> numero da inserire nello square
// 
// return: Torna l'elemento html creato
function generateGridItem(number) {
    const newSquare = document.createElement('div');
    if (Option === 'Easy') {
        newSquare.classList.add('square');
        newSquare.classList.add('square-easy');
    } else if (Option === 'Hard') {
        newSquare.classList.add('square');
        newSquare.classList.add('square-hard');
    } else {
        newSquare.classList.add('square');
        newSquare.classList.add('square-crazy');
    }
    
    
    newSquare.innerHTML = `<span>${number}</span>`; 

    return newSquare;
}

// Genera un array con x numeri unici
// quantityOfNumbers -> quanti numeri deve generare
// 
// return: array di quantityOfNumbers numeri univoci
function generateSquaresNumbers (quantityOfNumbers) {
    const numbersArray = [];
    while(numbersArray.length < quantityOfNumbers) {
        // Un numero random
        const randomNumber = getRndInteger(1, quantityOfNumbers);

        // Se il numero random non è gia presente in numbersArray lo pusho
        if( !numbersArray.includes(randomNumber) ) {
            numbersArray.push(randomNumber);
        }
    }

    return numbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}