var table = new Array(9);
var counter = 0;

var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var winningSchemes = [
    [0, 8, 2, 1, 5],
    [0, 8, 6, 3, 7],
    [2, 6, 0, 1, 3],
    [2, 6, 8, 5, 7],
    [4, 0, 6, 3, 2, 8],
    [4, 0, 2, 1, 6, 8],
    [4, 2, 8, 5, 6, 0],
    [4, 8, 6, 7, 2, 0],
    [4, 0, 3, 6, 5],
    [4, 2, 5, 3, 8],
    [4, 8, 5, 3, 2],
    [4, 6, 3, 0, 5],
    [1, 3, 4, 7, 5],
    [1, 5, 4, 3, 7],
    [3, 7, 4, 1, 5],
    [5, 7, 0, 1, 3],
    [1, 3, 0, 2, 6],
    [1, 5, 2, 0, 8],
    [5, 7, 8, 6, 2],
    [3, 7, 6, 0, 8],
    [3, 2, 0, 1, 6],
    [3, 8, 6, 0, 7],
    [0, 7, 6, 3, 8],
    [2, 7, 8, 5, 6]
];

var htmlTable = document.getElementById('tic-tac-toe');
var cells = htmlTable.getElementsByTagName('td');

function addMove(elementIndex, value) {
    var htmlTable = document.getElementById('tic-tac-toe');
    var cells = htmlTable.getElementsByTagName('td');
    table[elementIndex] = value;
    cells[elementIndex].innerHTML = value;
    counter++;
}

function checkForWinCombination() {
    var htmlTable = document.getElementById('tic-tac-toe');
    var cells = htmlTable.getElementsByTagName('td');
    for (var i = 0; i < 8; i++) {
        var combination = winCombinations[i];
        if (table[combination[0]] == table[combination[1]] && table[combination[1]] == table[combination[2]] && typeof table[combination[2]] != 'undefined') {
            cells[combination[0]].className = "win";
            cells[combination[1]].className = "win";
            cells[combination[2]].className = "win";
            return true;
        }
    }

    return false;
}

function checkForPossibleWinCombination(value) {
    for (var i = 0; i < 8; i++) {
        var combination = winCombinations[i];
        var cellNumber = false;
        if (table[combination[0]] == value && table[combination[1]] == value && typeof table[combination[2]] == 'undefined') {
            cellNumber = combination[2];
        } else if (table[combination[1]] == value && table[combination[2]] == value && typeof table[combination[0]] == 'undefined') {
            cellNumber = combination[0];
        } else if (table[combination[0]] == value && table[combination[2]] == value && typeof table[combination[1]] == 'undefined') {
            cellNumber = combination[1];
        }
        if (typeof cellNumber === 'number') {
            return cellNumber;
        }
    }

    return cellNumber;
}

function getMoveOfScheme() {
    var cellNumber = false;
    var nScheme = Math.round(Math.random() * winningSchemes.length);
    while (cellNumber == false && nScheme < winningSchemes.length) {
        for (var i = winningSchemes[nScheme].length - 1; i >= 0; i--) {
            if (table[winningSchemes[nScheme][i]] == 'X') {
                cellNumber = false;
                break;
            } else if (table[winningSchemes[nScheme][i]] != 'O') {
                cellNumber = winningSchemes[nScheme][i];
            }
        }
        nScheme++;
    }

    return cellNumber;
}

function randomMove() {
    do {
        var cellsNumber = Math.round(Math.random() * 8);
    } while (typeof table[cellsNumber] != 'undefined')

    return cellsNumber;
}

function clearTable() {
    var htmlTable = document.getElementById('tic-tac-toe');
    var cells = htmlTable.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].className = '';
        table = new Array(9);
        counter = 0;
    }

}

function play(e) {
    var td = e.target;
    if(td.innerHTML){
        return;
    }
    td.innerHTML = 'X';
    table[parseInt(td.id)] = 'X';
    counter++;

    if (checkForWinCombination()) {
        alert('Вие спечелихте!\n Започни нова игра.');
        clearTable();
        return;
    }

    if(counter == 9){
        alert('Няма победител!\n Започни нова игра.');
        clearTable();
        return;
    }

    var playCell = checkForPossibleWinCombination('O');

    if (playCell == false) {
        playCell = checkForPossibleWinCombination('X');
    }

    if (playCell == false) {
        playCell = getMoveOfScheme();
    }

    if (playCell == false) {
        playCell = randomMove();
    }

    addMove(playCell, 'O');

    if (checkForWinCombination()) {
        alert('Вие загубихте!\n Започни нова игра.');
            clearTable();
    }

    if(counter == 9){
       alert('Няма победител!\n Започни нова игра.');
       clearTable();
    }
}

htmlTable.addEventListener('click', play);
