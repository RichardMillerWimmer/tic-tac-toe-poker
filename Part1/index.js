// console.log("test connect")

let playHistory = []

function play(clickedId) {
    const currentPlayer = document.getElementById('player')
    const selectedBox = document.getElementById(clickedId)
    if (!selectedBox.innerText) {
        if (currentPlayer.innerText === "X") {
            currentPlayer.innerText = "O"
            selectedBox.innerText = "X"
            playHistory[clickedId] = "X"
        } else {
            currentPlayer.innerText = "X"
            selectedBox.innerText = "O"
            playHistory[clickedId] = "O"
        }
        // console.log(playHistory)


        const tl = playHistory[0]
        const tm = playHistory[1]
        const tr = playHistory[2]
        const ml = playHistory[3]
        const mm = playHistory[4]
        const mr = playHistory[5]
        const bl = playHistory[6]
        const bm = playHistory[7]
        const br = playHistory[8]

        if (tl !== undefined && tl === tm && tl === tr) {
            alert(`${tl} is the winner!`)
        }
        if (tl !== undefined && tl === mm && tl === br) {
            alert(`${tl} is the winner!`)
        }
        if (tl !== undefined && tl === ml && tl === bl) {
            alert(`${tl} is the winner!`)
        }
        if (tm !== undefined && tm === mm && tm === bm) {
            alert(`${tm} is the winner!`)
        }
        if (tr !== undefined && tr === mm && tr === bl) {
            alert(`${tr} is the winner!`)
        }
        if (tr !== undefined && tr === mr && tr === br) {
            alert(`${tr} is the winner!`)
        }
        if (ml !== undefined && ml === mm && ml === mr) {
            alert(`${ml} is the winner!`)
        }
        if (bl !== undefined && bl === bm && bl === br) {
            alert(`${bl} is the winner!`)
        }

        let fullBoard = true;
        for (let i = 0; i <= 8; i++) {
            if (playHistory[i] === undefined) {
                fullBoard = false
            }
        } if (fullBoard === true) {
            alert("Cat's game, no winner!")
        }
    }
};

function boardReset() {
    const tiles = document.querySelectorAll("td")
    tiles.forEach(elem => {
        elem.innerText = ""
    })
    playHistory = []
};

// function boardReset() {
//     playHistory.forEach((elem i) => {
//         elem[i] = ''
//     })
// }

