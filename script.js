const winCombinations = [['0', '1', '2'], ['0', '3', '6'], ['3', '4', '5'], ['6', '7', '8'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']]
player = []

initGame()
function initGame() {
    turns = 0
    playerX = []
    playerO = []
}

function mark(tile) {
    if (tile.textContent === '-') {
        if (turns % 2 === 0) {
            tile.textContent = "X"
            playerX.push(tile.id)
            player = playerX
        }
        else {
            tile.textContent = "0"
            playerO.push(tile.id)
            player = playerO
        }
        checkWin(player)
        turns++
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
                        if (player === playerX)
                            player = "X"
                        else
                            player = "O"
                        document.getElementById('score').innerText = player + " is the WINNER "
                        rematch()
                    }
                }
            }
        }
    }
}

function rematch() {
    document
    const reset = document.createElement('button')
    reset.textContent = 'Reset'
    document.getElementById('score').appendChild(reset)
    reset.addEventListener('click', () => {
        for (let i = 0; i < 9; i++) {
            document.getElementsByClassName('tiles')[i].textContent = '-'
        }
        document.getElementById('score').innerText = ''
        reset.prepend
        initGame()
    }

    )
}
