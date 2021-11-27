// users and grid
let user1 = "X";
let user2 = "O";
let currentUser = user1;
let gridBox = ['', '', '', '', '', '', '', '', ''];
let scoreboard = {
    user1: 0,
    user2: 0,
    ties: 0,
};

// click handler //
function cellClick(event) {
    if (event.target.classList.contains('box')) {
        let id = event.target.id;
        if (gridBox[id] == "") {
            gridBox[id] = currentUser;
            event.target.textContent = currentUser;
            event.target.style.backgroundColor = 'white';
            event.target.classList.toggle('f200');
            checkGrid();
            switchUser();
        }
    }
}

// checking to see if grid boxes are empty //
const grid = document.querySelector(`.grid`);
grid.addEventListener('click', cellClick);
console.log(gridBox);


// switching users //
function switchUser() {
    if (currentUser == user1) {
        currentUser = user2;
    } else {
        currentUser = user1;
    }
}
console.log(gridBox[0]);


// checking grid for winning combinations//
function checkGrid() {
    if (gridBox[0] == gridBox[1] && gridBox[1] == gridBox[2] && gridBox[2] !== "") {
        console.log('winner horizontal top row') // winning option no 4 //
        displayWinner();
    } else if (gridBox[3] == gridBox[4] && gridBox[4] == gridBox[5] && gridBox[5] !== "") {
        console.log('winner horizontal middle row') // winning option no 5 //
        displayWinner();
    } else if (gridBox[6] == gridBox[7] && gridBox[7] == gridBox[8] && gridBox[8] !== "") {
        console.log('winner horizontal bottom row') // winning option no 6 //
        displayWinner();
    } else if (gridBox[0] == gridBox[3] && gridBox[3] == gridBox[6] && gridBox[6] !== "") {
        console.log('winner vertical top column') // winning option no 1 //
        displayWinner();
    } else if (gridBox[1] == gridBox[4] && gridBox[4] == gridBox[7] && gridBox[7] !== "") {
        console.log('winner vertical middle column') // winning option no 2 //
        displayWinner();
    } else if (gridBox[2] == gridBox[5] && gridBox[5] == gridBox[8] && gridBox[8] !== "") {
        console.log('winner vertical right column') // winning option no 3 //
        displayWinner();
    } else if (gridBox[2] == gridBox[4] && gridBox[4] == gridBox[6] && gridBox[6] !== "") {
        console.log('winner diagonal 1') // winning option no 7 //
        displayWinner();
    } else if (gridBox[0] == gridBox[4] && gridBox[4] == gridBox[8] && gridBox[8] !== "") {
        console.log('winner diagonal 2') // winning option no 8 //
        displayWinner();
    } else if (!gridBox.includes("")) {
        drawGame();
    }
};

// displays tie and removes event listener//
function drawGame() {
    let draw = document.querySelector(`.draw`)
    scoreboard.ties = scoreboard.ties + 1;
    draw.textContent = `It's a tie!`;
    alert('You have tied!')
    const grid = document.querySelector(`.grid`);
    grid.removeEventListener('click', cellClick);
    updateScoreboard();
};


// displaying winner and removes event listener //
function displayWinner() {
    let winnerBox = document.querySelector('.win');
    if (currentUser == user1) {
        scoreboard.user1 = scoreboard.user1 + 1
    } else {
        scoreboard.user2 = scoreboard.user2 + 1
    }
    winnerBox.textContent = `${currentUser} is the winner!`;
    alert('You have won!')
    const grid = document.querySelector(`.grid`);
    grid.removeEventListener('click', cellClick);
    updateScoreboard();
};


// updating scoreboard //
function updateScoreboard() {
    let xScore = document.getElementById("x-score")
    xScore.textContent = scoreboard.user1;
    let oScore = document.getElementById("o-score")
    oScore.textContent = scoreboard.user2;
    let tieScore = document.getElementById("tie-score")
    tieScore.textContent = scoreboard.ties;
}

// resetting game //
let reset = document.querySelector(`.reset`);
reset.addEventListener('click', function () {
    let winnerBox = document.querySelector('.win');
    winnerBox.textContent = "";
    let draw = document.querySelector(`.draw`)
    draw.textContent = "";
    gridBox = ['', '', '', '', '', '', '', '', ''];
    currentUser = user1;
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "rgb(245, 9, 213)";
        boxes[i].textContent = "";
    }
    const grid = document.querySelector(`.grid`);
    grid.addEventListener('click', cellClick);
});



// eventually want to update to add reset scoreboard //
// resetting scoreboard//
// let resetScoreboard = document.querySelector(`.reset-scoreboard`);
// resetScoreboard.addEventListener('click', function () {
    // let xScoreReset = document.querySelector('.x-score')
    // xScoreReset.TEXT_NODE = "";
    // let oScoreReset = document.querySelector('.o-score')
    // oScoreReset.TEXT_NODE = "";
    // let tieScoreReset = document.querySelector('.tie-score')
    // tieScoreReset.TEXT_NODE = "";
    // let resetScoreAll = document.querySelector('.scoreboard');
    // for (let i = 0; i < resetScoreAll.length; i++) {
    // scoreboard[i] = "";
    // }     // const grid = document.querySelector(`.grid`);
    // grid.addEventListener('click', cellClick);
// });

// function resetSB() {
    // let xScore = document.getElementById("x-score")
    // xScore = scoreboard.user1 = "";
    // let oScore = document.getElementById("o-score")
    // oScore = scoreboard.user2 = "";
    // let tieScore = document.getElementById("tie-score")
    // tieScore = scoreboard.ties = "";
// }
// resetSB();