// user choice and grid
let user1 = "X";
let user2 = "O";
let currentUser = user1;
let gridBox = ['', '', '', '', '', '', '', '', ''];
let isWinner = false;


const grid = document.querySelector(`.grid`);
grid.addEventListener('click', function (event) {
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
    } console.log(gridBox);
});

function switchUser() {
    if (currentUser == user1) {
        currentUser = user2;
    } else {
        currentUser = user1;
    }
}
console.log(gridBox[0]);

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
    }
}

function displayWinner() {
    let winnerBox = document.querySelector('.winner');
    winnerBox.textContent = `${currentUser} wins!!`;
    isWinner = true;
    alert("You are the winner");
}

let reset = document.querySelector(`.reset`);
reset.addEventListener('click', function (event) {
    if (isWinner == true) {
        isWinner = false;
        gridBox = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = user1;
        let boxes = document.querySelectorAll('.box');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "rgb(245, 9, 213)";
            boxes[i].textContent = "";
        }
    }
});


//need to do tie 
