function start(){
    // Remove warning about required javacript activation
    document.querySelector('.warning').remove();
    document.querySelector('body').insertAdjacentHTML('beforeend', `
        <section class="start-section">
            <input type='button' value="Um jogador" onclick="onePlayer()" id="onePlayer">
            <input type='button' value="Dois jogadores" onclick="twoPlayers()" id="twoPlayer">
        </section>
    `)
}
start();