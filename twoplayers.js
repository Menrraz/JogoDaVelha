let player = 1; // 1 = Player X (first) | 2 = Player O
let [markedCells, playerXCells, playerOCells] = [[], [], []];
function twoPlayers() {
    createBoard();
}
function createBoard() {
    document.querySelector(".start-section").remove(); // Remove initial menu
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
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
    if (markedCells.indexOf(pCell) == -1) {
        markedCells.push(pCell);
    } else if (markedCells.length == 9) {
        // End game
    }
}