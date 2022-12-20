let player = 1; // 1 = Player X (first) | 2 = Player O
let gamemode;
let [markedCells, playerXCells, playerOCells] = [[], [], []];
let [xScore, oScore, tieScore] = [0, 0, 0];
function twoPlayers() {
    gamemode = 2;
    createBoard();
}
function createBoard(mode) {
    document.querySelector(".start-section").remove(); // Remove initial menu
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
        <section class='board'>
            <div class="cell cell1" onclick="${mode=='one'?'user':''}play(1)"></div>
            <div class="cell cell2" onclick="${mode=='one'?'user':''}play(2)"></div>
            <div class="cell cell3" onclick="${mode=='one'?'user':''}play(3)"></div>
            <div class="cell cell4" onclick="${mode=='one'?'user':''}play(4)"></div>
            <div class="cell cell5" onclick="${mode=='one'?'user':''}play(5)"></div>
            <div class="cell cell6" onclick="${mode=='one'?'user':''}play(6)"></div>
            <div class="cell cell7" onclick="${mode=='one'?'user':''}play(7)"></div>
            <div class="cell cell8" onclick="${mode=='one'?'user':''}play(8)"></div>
            <div class="cell cell9" onclick="${mode=='one'?'user':''}play(9)"></div>
        </section>
        <section class="scoreboard">
        <div class="x-scores">
            <i class="fa-solid fa-xmark"></i>
            <p class="p-x-score">0</p>
        </div>
        <div class="tie-scores">
            <i>-</i>
            <p class="p-tie-score">0</p>
        </div>
        <div class="o-scores">
            <i class="fa-regular fa-circle"></i>
            <p class="p-o-score">0</p>
        </div>
    </section>
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
        player = player == 1 ? 2: 1; // next turn, next player
        checkResult(markedCells, playerXCells, playerOCells);
    }
}
function checkResult(pMarkedCells, xCells, oCells) {
    function endGame(result) {
        document.querySelector(".board").style.pointerEvents = "none"
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
            document.querySelector(".board").style.pointerEvents = "auto"
        }, 2000)
        updateScore(result);
        // Reset all stats
        markedCells = [];
        playerXCells = [];
        playerOCells = [];
    }
    function updateScore(result) {
        if (result == "tie") {
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
            let playerCells = i == 1 ? xCells: oCells; // Define the player
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
    if (checkWinner().winner !== false) {
        let win = checkWinner().win;
        endGame(win);
    } else if (pMarkedCells.length == 9) {
        endGame('tie')
    }
    if (gamemode == 1) {botPlay();}
}