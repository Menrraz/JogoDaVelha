let player = 1; // 1 = Player X (first) | 2 = Player O
let [markedCells, playerXCells, playerOCells] = [[], [], []];
function twoPlayers() {
    createBoard();
}
function createBoard() {
    document.querySelector(".start-section").remove(); // Remove initial menu
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
        <p class="whosNext">É a vez do X</p>
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
        <i class="${iconClass} icon icon-player${player}"></i>
        `);
        player = player == 1 ? 2: 1; // next turn, next player
        document.querySelector(".whosNext").innerHTML = "É a vez do " + `<i class='${player == 1 ? "fa-solid fa-xmark": "fa-regular fa-circle"}'></i>`;
        checkResult(markedCells, playerXCells, playerOCells);
    }
}
function checkResult(pMarkedCells, xCells, oCells) {
    function endGame() {
        document.querySelector(".board").style.filter = "grayscale(1)";
        document.querySelector(".board").style.background = "gray";
        setTimeout(function(){
            document.querySelector(".board").style.filter = "grayscale(0)";
            document.querySelector(".board").style.background = "lightgray";
            document.querySelector(".end-game-div").remove();
            document.querySelectorAll('.icon').forEach(icon => {icon.remove()});
        }, 2000)
    }
    if (pMarkedCells.length == 9) {
        document.querySelector('body').insertAdjacentHTML('beforeend', `
            <div class="end-game-div">DEU VELHA!</div>
        `)
        endGame()
    }
}