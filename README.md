<h1>Jogo da Velha</h1>
<h2>Sobre</h2>
<p>Todo mundo conhece o jogo da velha, um dos mais simples e práticos games para se jogar.</p>
<p>Desafiei-me a criar em Javascript pois nunca fiz algo parecido com o usuário jogar contra a "máquina". Inicialmente foi difícil imaginar um algoritmo que joga sozinho, mas no final consegui o resultado esperado.</p>
<h2>Como jogar?</h2>
<p>Basta ir para a página e <a href="https://menrraz.github.io/JogoDaVelha/">comece a jogar</a>.</p>
<h2>Como funciona o código</h2>
<p>O arquivo script.js possuí todas as variáveis globais e cria no DOM toda a página inicial.</p>
<p>Já o arquivo game.js tem as funções essenciais para o jogo funcionar.</p>
<p>Enquanto que o arquivo bot.js lida com o modo de jogo sozinho, onde o usuário irá jogar contra o programa.</p>
<p>A parte mais importante de todo o projeto está aqui. A função que permite o usuário jogar sozinho precisa impedir constantemente a vitória dele e ainda tentar ganhar quando possível.</p>
<p>Em primeiro lugar, é necessário a criação de um array onde há todas as possibilidades de vitórias. Cada número seria uma célula, com a célula 1 sendo o primeiro quadrado superior esquerdo, e a célula 9 o último quadrado no lado inferior direito.</p>
<img src="https://i.imgur.com/gHl2hVL.png" alt="numeração das células" height="30%" width="30%">
<p>Definindo isso é possível saber quais são as condições de vitória:</p>
<code>let wins = [[1,2,3],[4,5,6],[7,8,9],[7,4,1],[8,5,2],[9,6,3],[7,5,3],[9,5,1]];</code>