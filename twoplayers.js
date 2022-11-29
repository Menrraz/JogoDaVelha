function twoPlayers() {
    document.querySelector(".start-section").remove(); // Remove initial menu
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
        <section class='board'>
        
        </section>
    `);
}