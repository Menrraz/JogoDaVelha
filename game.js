function twoPlayers() {
    gamemode = 2;
    createBoard();
    body.style.height = "100vh";
}
function createBoard() {
    document.querySelector(".start-section").remove(); // Remove initial menu
    body.insertAdjacentHTML('beforeend', `
    <main>
        <i class="fa-solid fa-arrow-left back-icon" onclick="back()"></i>
        <section class='board'>
            <div class="cell cell1" onclick="play(1)"></div>
            <div class="cell cell2" onclick="play(2)"></div>
            <div class="cell cell3" onclick="play(3)"></div>
            <div class="cell cell4" onclick="play(4)"></div>
            <div class="cell cell5" onclick="play(5)"></div>
            <div class="cell cell6" onclick="play(6)"></div>
            <div class="cell cell7" onclick="play(7)"></div>
            <div class="cell cell8" onclick="play(8)"></div>
            <div class="cell cell9" onclick="play(9)"></div>
        </section>
        <section class="scoreboard">
        <div class="x-scores">
            <i class="fa-solid fa-xmark x-scores-icon"></i>
            <p class="p-x-score">0</p>
        </div>
        <div class="tie-scores">
            <i>-</i>
            <p class="p-tie-score">0</p>
        </div>
        <div class="o-scores">
            <i class="fa-regular fa-circle o-scores-icon"></i>
            <p class="p-o-score">0</p>
        </div>
        </section>
    </main>
    `);
}
function play(pCell) {
    let cell = document.querySelector(`.cell${pCell}`);
    // If player 1, so icon X. if player 2, so icon O
    let iconClass = player == 1 ? "fa-solid fa-xmark": "fa-regular fa-circle";
    if (markedCells.indexOf(pCell) == -1) {
        markedCells.push(pCell);
        player == 1 ? playerXCells.push(pCell) : playerOCells.push(pCell);
        cell.insertAdjacentHTML('beforeend', `
        <i class="${iconClass} icon icon-player${player} iconCell${pCell}"></i>
        `);
        document.querySelector(`.${player == 1 ? 'x': 'o'}-scores`).style.filter = "grayscale(1)";
        document.querySelector(`.${player == 1 ? 'o': 'x'}-scores`).style.filter = "grayscale(0)";
        document.querySelector(`.${player == 1 ? 'x': 'o'}-scores-icon`).style.transform = "scale(1)";
        document.querySelector(`.${player == 1 ? 'o': 'x'}-scores-icon`).style.transform = "scale(1.2)";
        player = player == 1 ? 2: 1; // next turn, next player
        checkResult(markedCells, playerXCells, playerOCells);
    }
}
function checkResult(pMarkedCells) {
    isGameOver = checkWinner().winner !== false ? true : false;
    if (checkWinner().winner !== false) {
        endGame(checkWinner().win);
    } else if (pMarkedCells.length == 9) {
        endGame("tie");
    }
    if (gamemode == 1 && player == 2 && isGameOver == false) {
        
        // Prevents user to be able to play while bot plays
        blockBoard();
        // If the game ends bot has to wait a little more to play
        if (checkWinner().winner !== false || pMarkedCells.length == 9) {
            setTimeout(botPlay, 2500);
            blockBoard();
        } else {
            setTimeout(botPlay, 500);
            setTimeout(blockBoard, 500);
        }
    }
    isGameOver == true && gamemode == 1 ? setTimeout(botPlay, 2500) : ''
    isGameOver = false;
}
function endGame(result) {
    blockBoard();
    if (result !== undefined) {
        for (let i = 1; i <= 9; i++) {
            // Paint all cells except the ones that make the player wins
            if (result.indexOf(i) == -1) {
                try {document.querySelector(`.iconCell${i}`).style.color = "#6a6a6a"}catch{}
            }
        } 
    }
    if (result=='tie'){document.querySelector(".board").style.filter = "grayscale(1)"};
    document.querySelector(".board").style.background = "gray";
    setTimeout(function(){
        if (result=='tie'){document.querySelector(".board").style.filter = "grayscale(0)"};
        document.querySelector(".board").style.background = "lightgray";
        document.querySelectorAll('.icon').forEach(icon => {icon.remove()});
        blockBoard();
    }, 2000)
    updateScore(result);
    // Reset all stats
    markedCells = [];
    playerXCells = [];
    playerOCells = [];
}
function updateScore(result) {
    if (result == 'tie') {
        tieScore++;
        document.querySelector('.p-tie-score').innerHTML = tieScore;
    } else {
        checkWinner().winner == 1 ? xScore++: oScore++;
        document.querySelector('.p-x-score').innerHTML = xScore;
        document.querySelector('.p-o-score').innerHTML = oScore;
    }
}
function checkWinner() {
    let wins = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [7,4,1],
        [8,5,2],
        [9,6,3],
        [7,5,3],
        [9,5,1],
    ];
    for(let i = 1; i <= 2; i++) {
        let playerCells = i == 1 ? playerXCells: playerOCells; // Define the player
        for (let p = 0; p < wins.length; p++) {
            let winner = 0;
            for (let j = 0; j < playerCells.length; j++) {
                for (let k = 0; k < wins[p].length; k++) {
                    if (wins[p][k] == playerCells[j]) {
                        winner++;
                    }
                    if (winner == 3) {
                        return {"winner": i, "win": wins[p]};
                    }
                }
            }
        }
    }
    return {"winner": false};
}
let block = 'none'
function blockBoard() {
    document.querySelector(".board").style.pointerEvents = block;
    block = block == 'auto' ? 'none' : 'auto'
}
function back() {
    // Reset all stats
    markedCells = [];
    playerXCells = [];
    playerOCells = [];
    player = 1;
    // Update DOM
    body.style.height = "90vh";
    document.querySelector("main").remove();
    start();
}