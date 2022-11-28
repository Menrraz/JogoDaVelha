(function (){
        let warning = document.querySelector('.warning').remove() // Remove warning about required javacript activation
        document.querySelector('body').insertAdjacentHTML('beforeend', `
            <section>
                <input type='button' value="Um jogador">
                <input type='button' value="Dois jogadores">
            </section>
        `)
    }
)()