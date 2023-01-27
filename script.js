let player = 1; // 1 = Player X (first) | 2 = Player O
let gamemode;
let isGameOver = false;
let [markedCells, playerXCells, playerOCells] = [[], [], []];
let [xScore, oScore, tieScore] = [0, 0, 0];
function start(){
    // Remove warning about required javacript activation
    try {document.querySelector('.warning').remove();} catch {}
    document.querySelector('body').insertAdjacentHTML('beforeend', `
        <section class="start-section">
            <input type='button' value="Um jogador" onclick="onePlayer()" id="onePlayer">
            <input type='button' value="Dois jogadores" onclick="twoPlayers()" id="twoPlayer">
            <footer>
                <p>Esse site foi feito por um estudante de programação.</p>
                <div class='footer-icons'>
                    <i class="fa-brands fa-square-github">
                    </i><i class="fa-brands fa-linkedin"></i>
                </div>
            </footer>
        </section>
    `)
}
start();