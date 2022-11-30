let player = 1; // 1 = Player X (first) | 2 = Player O
function twoPlayers() {
    createBoard();
}
function createBoard() {
    document.querySelector(".start-section").remove(); // Remove initial menu
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
        <section class='board'>
            <div class="cell cell1" onclick="play(${player}, 'cell1')"></div>
            <div class="cell cell2" onclick="play(${player}, 'cell2')"></div>
            <div class="cell cell3" onclick="play(${player}, 'cell3')"></div>
            <div class="cell cell4" onclick="play(${player}, 'cell4')"></div>
            <div class="cell cell5" onclick="play(${player}, 'cell5')"></div>
            <div class="cell cell6" onclick="play(${player}, 'cell6')"></div>
            <div class="cell cell7" onclick="play(${player}, 'cell7')"></div>
            <div class="cell cell8" onclick="play(${player}, 'cell8')"></div>
            <div class="cell cell9" onclick="play(${player}, 'cell9')"></div>
        </section>
    `);
}
function play(player, pCell) {
    let cell = document.querySelector(`.${pCell}`);
}