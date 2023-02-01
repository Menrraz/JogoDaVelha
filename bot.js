function onePlayer() {
    gamemode = 1;
    createBoard();
}
function botPlay() {
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
    for (let i = 0; i < wins.length; i++) {
        let xChance = 0; // Bot wants to stops this variable to get to 3, otherwise it loses.
        let oChance = 0; // Bot wants to turn it into a 3, so it wins
        for (let j = 0; j < playerXCells.length; j++) {
            for (let k = 0; k < 3; k++) {
                // Play where prevent user victory
                if (wins[i][k] == playerXCells[j]) {
                    xChance++;
                }
                if (xChance == 2 && player == 2) {
                    let nextPlay = wins[i].filter(x => !playerXCells.includes(x)); 
                    if (markedCells.indexOf(nextPlay[0]) == -1) {
                        player = 2;
                        play(nextPlay[0]);
                    }
                }
                // Plays where it wins
                if (wins[i][k] == playerOCells[j]) {
                    oChance++;
                }
                if (oChance == 2 && player == 2) {
                    let nextPlay = wins[i].filter(x => !playerOCells.includes(x));
                    if (markedCells.indexOf(nextPlay[0]) == -1) {
                        player = 2;
                        play(nextPlay[0]);
                    }
                }
            }
        }
        // Plays in a random cell
        let nextPlay = Math.floor(Math.random()*10)
        if ((xChance < 2 || oChance < 2) && i == 7 && player == 2) {
            while (true) {
                nextPlay = nextPlay == 0 ? Math.floor(Math.random()*10): nextPlay;
                nextPlay = markedCells.indexOf(nextPlay) == -1 ? nextPlay: Math.floor(Math.random()*10)
                if (nextPlay !== 0) {
                    if (markedCells.indexOf(nextPlay) == -1) {break;}
                }
            }
            play(nextPlay);
        }
    }
}