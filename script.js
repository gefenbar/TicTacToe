const winCombinations = [['0', '1', '2'], ['0', '3', '6'], ['3', '4', '5'], ['6', '7', '8'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']]
initGame()
function initGame() {
    turns = 0
    player = []
    playerX = []
    playerO = []
    win = false
}

function mark(tile) {
    if (tile.textContent === '-' && !win) {
        if (turns % 2 === 0) {
            tile.textContent = "X"
            playerX.push(tile.name)
            player = playerX
        }
        else {
            tile.textContent = "0"
            playerO.push(tile.name)
            player = playerO
        }
        turns++
        checkWin(player)
    }
}

function checkWin(player) {
    for (let i = 0; i < winCombinations.length; i++) {
        match = 0
        for (let j = 0; j < winCombinations[0].length; j++) {
            for (let k = 0; k < player.length; k++) {
                if (player[k] === winCombinations[i][j]) {
                    match++
                    if (match === 3) {
                        win = true
                        if (player === playerX)
                            player = "X"
                        else
                            player = "O"
                        document.getElementById('score').innerText = player + " is the WINNER "
                        rematch()
                    }
                    if (turns == 9) {
                        document.getElementById('score').innerText = "It's a DRAW! "
                        rematch()
                    }
                }
            }
        }
    }
}

function rematch() {
    const reset = document.createElement('button')
    reset.textContent = 'Reset'
    document.getElementById('score').appendChild(reset)
    reset.addEventListener('click', () => {
        for (let i = 0; i < 9; i++) {
            document.getElementsByClassName('tiles')[i].textContent = '-'
        }
        document.getElementById('score').innerText = 'X vs O'
        reset.prepend
        initGame()
    }

    )
}
