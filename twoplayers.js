let player = 1; // 1 = Player X (first) | 2 = Player O
let [markedCells, playerXCells, playerOCells] = [[], [], []];
function twoPlayers() {
    createBoard();
}
function createBoard() {
    document.querySelector(".start-section").remove(); // Remove initial menu
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
        <p class="whos-next">É a vez do <i class="fa-solid fa-xmark whos-next-icon icon-player1"></i></p>
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
        player = player == 1 ? 2: 1; // next turn, next player
        document.querySelector(".whos-next-icon").remove();
        document.querySelector(".whos-next").innerHTML = "É a vez do " + `<i class='${player == 1 ? "fa-solid fa-xmark": "fa-regular fa-circle"} icon-player${player} whos-next-icon'></i>`;
        checkResult(markedCells, playerXCells, playerOCells);
    }
}
function checkResult(pMarkedCells, xCells, oCells) {
    function endGame(wins) {
        if (wins !== undefined) {
            for (let i = 1; i <= 9; i++) {
                // Paint all cells except the ones that make the player wins
                if (wins.indexOf(i) == -1) {
                    try {document.querySelector(`.iconCell${i}`).style.color = "#6a6a6a"}catch{}
                }
            } 
        }
        if (wins=='tie'){document.querySelector(".board").style.filter = "grayscale(1)"};
        document.querySelector(".board").style.background = "gray";
        setTimeout(function(){
            if (wins=='tie'){document.querySelector(".board").style.filter = "grayscale(0)"};
            document.querySelector(".board").style.background = "lightgray";
            document.querySelectorAll('.icon').forEach(icon => {icon.remove()});
        }, 2000)
        // Reset all stats
        markedCells = [];
        playerXCells = [];
        playerOCells = [];
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
        endGame()
    }
}