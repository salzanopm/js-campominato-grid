// Creare in JavaScript una griglia 8x8. Ogni cella della 
// griglia contiene un numero casuale da 1 a 64. I numeri presenti 
// nelle celle non devono essere ripetuti (ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

// Ogni volta che clicco su un quadrato questo si colora di 
// verde se il numero contenuto e pari e in rosso se dispari.
const playButton = document.getElementById('play-button')
playButton.addEventListener('click',startGame);

function startGame() {
    // CREARE LA GRIGLIA CON GLI SQUARE

    // h2 con hidden
    const introText = document.getElementById('intro-text');
    introText.classList.add('hidden');

    // Per ogni numero nell'array, creo una cella e la appendo al grid container
    const mainGrid = document.getElementById('grid');
    mainGrid.classList.remove('hidden');
    mainGrid.innerHTML = '';

    // verifico e memorizzo cosa ha scelto l'utente
    const levelSelect = parseInt(document.getElementById('select-level').value);
    let maxGridNumber;
    let gridItemDimension;
    if(levelSelect === 1) {
        maxGridNumber = 100;
        gridItemDimension = 10;
    } else if ( levelSelect === 2 ) {
        maxGridNumber = 81;
        gridItemDimension = 9;
    } else if ( levelSelect === 3 ) {
        maxGridNumber = 49;
        gridItemDimension = 7;
    }

    for(let i = 0; i < maxGridNumber; i++) {
       
        const newGeneratedCell = generateGridItem(i,gridItemDimension);

        // Attacco l'evento allo square
        newGeneratedCell.addEventListener('click', handleCellClick);
        
        // Aggiungo l'elemento alla griglia
        mainGrid.appendChild(newGeneratedCell);
    }
}

// AL CLICK SU OGNI SQUARE
// AGGIUNGO LA CLASSE ACTIVE ALLO SQUARE SU CUI HO CLICCATO E LA CLASSE EVEN O ODD IN BASE SE IL CONTENUTO 
// E' PARI O DISPARI
// -----------
// FUNZIONI LEGATE AL DOM
// -----------
function handleCellClick() {
    this.classList.add('clicked');
}

  
// -----------
// FUNCTIONS
// -----------

// Creare un elemento della griglia
// number -> numero da inserire nello square
// 
// return: Torna l'elemento html creato
function generateGridItem(innerNumber, cellDimension) {
    const newCell = document.createElement('div');
    newCell.classList.add('square');
    newCell.innerHTML = `<span>${innerNumber}</span>`; 

    newCell.style.width = `calc(100% / ${cellDimension})`;
    newCell.style.height = `calc(100% / ${cellDimension})`;
    return newCell;
}

// 