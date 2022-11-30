function twoPlayers() {
    createBoard();
}
function createBoard() {
    document.querySelector(".start-section").remove(); // Remove initial menu
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
        <section class='board'>
            <div class="cell cell1"></div>
            <div class="cell cell2"></div>
            <div class="cell cell3"></div>
            <div class="cell cell4"></div>
            <div class="cell cell5"></div>
            <div class="cell cell6"></div>
            <div class="cell cell7"></div>
            <div class="cell cell8"></div>
            <div class="cell cell9"></div>
        </section>
    `);
}