"use strict";
console.log("Hello Odd Friends");
const combinations = [
  // horizontal wins
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [6, 7, 8, 9],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [13, 14, 15, 16],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [19, 20, 21, 22],
  [20, 21, 22, 23],
  [24, 25, 26, 27],
  [25, 26, 27, 28],
  [26, 27, 28, 29],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [32, 33, 34, 35],
  // vertical wins
  [0, 6, 12, 18],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [1, 7, 13, 19],
  [7, 13, 19, 25],
  [13, 19, 25, 31],
  [2, 8, 14, 20],
  [8, 14, 20, 26],
  [14, 20, 26, 32],
  [3, 9, 15, 21],
  [9, 15, 21, 27],
  [15, 21, 27, 33],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [16, 22, 28, 34],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  // diagonal wins
  [12, 19, 26, 33],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [2, 9, 16, 23],
  [18, 13, 8, 3],
  [24, 19, 14, 9],
  [19, 14, 9, 4],
  [30, 25, 20, 15],
  [25, 20, 15, 10],
  [20, 25, 10, 5],
  [31, 26, 21, 16],
  [26, 21, 16, 11],
  [32, 27, 22, 17],
  // square wins
  [0, 1, 6, 7],
  [1, 2, 7, 8],
  [2, 3, 8, 9],
  [3, 4, 9, 10],
  [4, 5, 10, 11],
  [6, 7, 12, 13],
  [7, 8, 13, 14],
  [8, 9, 14, 15],
  [9, 10, 15, 16],
  [10, 11, 16, 17],
  [12, 13, 18, 19],
  [13, 14, 19, 20],
  [14, 15, 20, 21],
  [15, 16, 21, 22],
  [16, 17, 22, 23],
  [18, 19, 24, 25],
  [19, 20, 25, 26],
  [20, 21, 26, 27],
  [21, 22, 27, 28],
  [22, 23, 28, 29],
  [24, 25, 30, 31],
  [25, 26, 31, 32],
  [26, 27, 32, 33],
  [27, 28, 33, 34],
  [28, 29, 34, 35],
];
const board = document.getElementById("board");
const cells = board.getElementsByTagName("td");
const restartButton = document.querySelector(".restart");
const cell = document.querySelectorAll(".cell");
const popup = document.querySelector(".popup");
const bucket = document.querySelector(".bucketOne");
Array.from(cells).forEach((cell) => {
  cell.addEventListener("click", handleClick);
});
let sign = document.querySelector(".currentPlayerSign");
const computer = "O";
const player = "X";
let currentPlayer = "X";

function handleClick() {
  if (this.innerText === "") {
    this.innerText = "X";
    if (checkForWin()) {
      sign.textContent = `Player ${currentPlayer} wins`;
    } else if (checkForDraw()) {
      sign.textContent = "You drew the game";
    } else {
      setTimeout(makeComputerMove, 1000);
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      console.log(currentPlayer);
    }
  }
}

restartButton.addEventListener("click", function () {
  const cells = board.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    currentPlayer = "X";
    sign.textContent = `Player ${currentPlayer}'s Turn`;
  }
});

function makeMove(cell) {
  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}
// computer
function makeComputerMove() {
  let emptyCells = [];
  for (let v = 0; v < cells.length; v++) {
    if (cells[v].textContent === "") {
      emptyCells.push(cells[v]);
    }
  }
  for (let v = 0; v < combinations.length; v++) {
    const [a, b, c, d] = combinations[v];
    if (
      cells[a].textContent === "O" &&
      cells[b].textContent === "O" &&
      cells[c].textContent === "O" &&
      cells[d].textContent === ""
    ) {
      makeMove(cells[d]);
      checkForWin();
      return;
    } else if (
      cells[d].textContent === "" &&
      cells[c].textContent === "O" &&
      cells[b].textContent === "O" &&
      cells[a].textContent === "O"
    ) {
      makeMove(cells[a]);
      checkForWin();
      return;
    } else if (
      cells[a].textContent === "O" &&
      cells[b].textContent === "" &&
      cells[c].textContent === "O" &&
      cells[d].textContent === "O"
    ) {
      makeMove(cells[b]);
      checkForWin();
      return;
    } else if (
      cells[a].textContent === "O" &&
      cells[b].textContent === "O" &&
      cells[c].textContent === "" &&
      cells[d].textContent === "O"
    ) {
      makeMove(cells[c]);
      checkForWin();
      return;
    } else if (
      cells[a].textContent === "X" &&
      cells[b].textContent === "X" &&
      cells[c].textContent === "X" &&
      cells[d].textContent === ""
    ) {
      makeMove(cells[d]);
      checkForWin();
      return;
    } else if (
      cells[a].textContent === "X" &&
      cells[b].textContent === "" &&
      cells[c].textContent === "X" &&
      cells[d].textContent === "X"
    ) {
      makeMove(cells[b]);
      checkForWin();
      return;
    } else if (
      cells[a].textContent === "X" &&
      cells[b].textContent === "X" &&
      cells[c].textContent === "" &&
      cells[d].textContent === "X"
    ) {
      makeMove(cells[c]);
      checkForWin();
      return;
    } else if (
      cells[a].textContent === "" &&
      cells[b].textContent === "X" &&
      cells[c].textContent === "X" &&
      cells[d].textContent === "X"
    ) {
      makeMove(cells[a]);
      checkForWin();
      return;
    } else if (
      cells[a].textContent === "O" &&
      cells[b].textContent === "O" &&
      cells[c].textContent === ""
    ) {
      makeMove(cells[c]);
      checkForWin();
      return;
    } else if (
      cells[b].textContent === "X" &&
      cells[c].textContent === "X" &&
      cells[d].textContent === ""
    ) {
      makeMove(cells[d]);
      checkForWin();
      return;
    } else if (cells[a].textContent === "O" && cells[b].textContent === "") {
      makeMove(cells[b]);
      checkForWin();
      return;
    } else if (
      cells[c].textContent === "X" &&
      cells[d].textContent === "X" &&
      cells[a].textContent === ""
    ) {
      makeMove(cells[a]);
      checkForWin();
      return;
    }
  }

  // choose a random empty cell
  let randomIndex = Math.floor(Math.random() * emptyCells.length);
  let randomCell = emptyCells[randomIndex];
  makeMove(randomCell);
}

function checkForWin() {
  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c, d] = combinations[i];
    if (
      cells[a].textContent === "X" &&
      cells[b].textContent === "X" &&
      cells[c].textContent === "X" &&
      cells[d].textContent === "X"
    ) {
      console.log(`Player ${currentPlayer} wins!`);
      sign.textContent = `Player ${currentPlayer} wins!`;
      return true;
    } else if (
      cells[a].textContent === "O" &&
      cells[b].textContent === "O" &&
      cells[c].textContent === "O" &&
      cells[d].textContent === "O"
    ) {
      console.log("computer wins");
      sign.textContent = "Computer wins you useless rat!";
      return;
    }
  }
  return false;
}
function checkForDraw() {
  if (
    cells[0].textContent &&
    cells[1].textContent &&
    cells[2].textContent &&
    cells[3].textContent &&
    cells[4].textContent &&
    cells[5].textContent &&
    cells[6].textContent &&
    cells[7].textContent &&
    cells[8].textContent &&
    cells[9].textContent &&
    cells[10].textContent &&
    cells[11].textContent &&
    cells[12].textContent &&
    cells[13].textContent &&
    cells[14].textContent &&
    cells[15].textContent &&
    cells[16].textContent &&
    cells[17].textContent &&
    cells[18].textContent &&
    cells[19].textContent &&
    cells[20].textContent &&
    cells[21].textContent &&
    cells[22].textContent &&
    cells[23].textContent &&
    cells[24].textContent &&
    cells[25].textContent &&
    cells[26].textContent &&
    cells[27].textContent &&
    cells[28].textContent &&
    cells[29].textContent &&
    cells[30].textContent &&
    cells[31].textContent &&
    cells[32].textContent &&
    cells[33].textContent &&
    cells[34].textContent &&
    cells[35].textContent
  ) {
    return true;
  } else {
    return false;
  }
}
// unneded code
// board.addEventListener(
//   "click",
//   function (event) {
//     const target = event.target;
//     if (
//       target.nodeType === Node.ELEMENT_NODE &&
//       target.tagName === "TD" &&
//       !target.textContent
//     ) {
//       target.textContent = currentPlayer;
//       if (checkForWin()) {
//         if (winner === computer) {
//           sign.textContent = "Computer has Won";
//         } else {
//           sign.textContent = "Player X has Won";
//         }
//       } else if (checkForDraw()) {
//         sign.textContent = "You drew the game";
//       } else {
//         setTimeout(makeComputerMove, 1000);
//       }
//     }
//   }.bind({ currentPlayer: currentPlayer })
// );
