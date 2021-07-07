let turn = true; //true --> X

function mark(boxId) {
  document.getElementById(boxId).innerText = turn ? "X" : "O";
  turn = !turn;
}

function checkForWin() {
  let box1 = document.getElementById(1);
  let box2 = document.getElementById(2);
  let box3 = document.getElementById(3);
  let box4 = document.getElementById(4);
  let box5 = document.getElementById(5);
  let box6 = document.getElementById(6);
  let box7 = document.getElementById(7);
  let box8 = document.getElementById(8);
  let box9 = document.getElementById(9);

  // horizontals
  if (
    box1.innerText === box2.innerText &&
    box2.innerText === box3.innerText &&
    box1.innerText.trim().length !== 0 &&
    box2.innerText.trim().length !== 0 &&
    box3.innerText.trim().length !== 0
  ) {
    if (box1.innerText === "X") console.log("X won");
    else console.log("O won");
  }

  if (
    box4.innerText === box5.innerText &&
    box5.innerText === box6.innerText &&
    box4.innerText.trim().length !== 0 &&
    box5.innerText.trim().length !== 0 &&
    box6.innerText.trim().length !== 0
  ) {
    if (box4.innerText === "X") console.log("X won");
    else console.log("O won");
  }

  if (
    box7.innerText === box8.innerText &&
    box8.innerText === box9.innerText &&
    box7.innerText.trim().length !== 0 &&
    box8.innerText.trim().length !== 0 &&
    box9.innerText.trim().length !== 0
  ) {
    if (box4.innerText === "X") console.log("X won");
    else console.log("O won");
  }

  //   verticals
  if (
    box1.innerText === box4.innerText &&
    box4.innerText === box7.innerText &&
    box1.innerText.trim().length !== 0 &&
    box4.innerText.trim().length !== 0 &&
    box7.innerText.trim().length !== 0
  ) {
    if (box1.innerText === "X") console.log("X won");
    else console.log("O won");
  }

  if (
    box2.innerText === box5.innerText &&
    box5.innerText === box8.innerText &&
    box2.innerText.trim().length !== 0 &&
    box5.innerText.trim().length !== 0 &&
    box8.innerText.trim().length !== 0
  ) {
    if (box2.innerText === "X") console.log("X won");
    else console.log("O won");
  }

  if (
    box3.innerText === box3.innerText &&
    box6.innerText === box9.innerText &&
    box3.innerText.trim().length !== 0 &&
    box6.innerText.trim().length !== 0 &&
    box9.innerText.trim().length !== 0
  ) {
    if (box3.innerText === "X") console.log("X won");
    else console.log("O won");
  }

  //   diagonals
  if (
    box1.innerText === box5.innerText &&
    box5.innerText === box9.innerText &&
    box1.innerText.trim().length !== 0 &&
    box5.innerText.trim().length !== 0 &&
    box9.innerText.trim().length !== 0
  ) {
    if (box1.innerText === "X") console.log("X won");
    else console.log("O won");
  }

  if (
    box3.innerText === box5.innerText &&
    box5.innerText === box7.innerText &&
    box3.innerText.trim().length !== 0 &&
    box5.innerText.trim().length !== 0 &&
    box7.innerText.trim().length !== 0
  ) {
    if (box1.innerText === "X") console.log("X won");
    else console.log("O won");
  }
}

function onReset() {
  location.reload();
}

function onClickHandler(id) {
  mark(id);
  checkForWin();
}
