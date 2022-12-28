function onePlayer() {
    gamemode = 1;
    createBoard('one');
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
            }
        }
    }
}