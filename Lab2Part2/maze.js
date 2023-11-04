var gameStarted = false;

const startDiv = document.getElementById("start");
const endDiv = document.getElementById("end");
const statusDiv = document.getElementById("status");
const Maze = document.getElementById("maze");
const reload = document.getElementById("restart");
// if hover in class boundary change color to red
// exo1

const boundary = document.querySelectorAll(".boundary");

// for (let i = 0; i < boundary.length; i++) {
//   boundary[i].addEventListener("mouseover", function () {
//     for (let j = 0; j < boundary.length; j++) {
//       boundary[i].style.backgroundColor = "red";
//     }
//   });
// }

//
let num_lose = document.querySelector(".num_lose");
//  // exo2
for (let i = 0; i < boundary.length; i++) {
  boundary[i].addEventListener("mouseover", function () {
    if (gameStarted) {
      for (let j = 0; j < boundary.length; j++) {
        boundary[j].style.backgroundColor = "red";
      }
      num_lose.innerHTML = parseInt(num_lose.innerHTML) + 1;
      statusDiv.innerHTML = "You Lose";

      //   num_lose.innerHTML = parseInt(num_lose.innerHTML) + 1;
      // if hover in class boundary change number of lose just one time
      //   if (statusDiv.innerText === "You Lose") {
      //     num_lose.innerHTML = parseInt(num_lose.innerHTML) + 1;
      //   }

      setTimeout(() => {
        resetGameState();
      }, 500);
    }
  });
}

// exo3
// document.querySelector("#maze").addEventListener("mouseleave", function() {
//     for (let i = 0; i < boundary.length; i++) {
//         boundary[i].style.backgroundColor = "#eeeeee";
//     }
// });

// exo3
numP = document.querySelector(".num");
// change porsontage of nump to how  match the way rest
// Maze.addEventListener("mousemove", function (event) {
//   let x = event.clientX;
//   let width = Maze.offsetWidth;
//   let num = Math.round((x / width) * 100); // Updated to map to 0% to 100%
//   numP.innerHTML = num + '%'; // Display the percentage with a percent sign
// });

// Assuming you have elements with the IDs 'S' and 'E' for the start and end points.
const S = document.getElementById("start");
const E = document.getElementById("end");
// const Maze = document.getElementById('Maze');
// const numP = document.getElementById('numP');

Maze.addEventListener("mousemove", function (event) {
  let x = event.clientX;
  let start = S.getBoundingClientRect().left;
  let end = E.getBoundingClientRect().right;

  // Ensure the mouse position is within the start and end points.
  if (x < start) {
    x = start;
  } else if (x > end) {
    x = end;
  }

  let num = Math.round(((x - start) / (end - start)) * 100);
  numP.innerHTML = num;
});

let num_win = document.querySelector(".num_win");

endDiv.addEventListener("mouseover", function () {
  console.log("hovederd end");
  if (gameStarted) {
    statusDiv.innerHTML = "You Win";

    num_win.innerHTML = parseInt(num_win.innerHTML) + 1;
    gameStarted = false;
  }
});

// exo4
startDiv.addEventListener("click", function () {
  if (!gameStarted) {
    gameStarted = true;
    statusDiv.innerHTML = "Game started";
  }
});

startDiv.addEventListener("mouseover", function () {
  if (!gameStarted) {
    gameStarted = true;
    statusDiv.innerHTML = "Game started";
  }
});

// exo5

// Function to reset the game state
function resetGameState() {
  for (let i = 0; i < boundary.length; i++) {
    boundary[i].style.backgroundColor = "#eeeeee";
  }

  gameStarted = false;
}

// Function to check if players are cheating
Maze.addEventListener("mouseleave", function (event) {
  console.log("mouse leave ");
  for (let i = 0; i < boundary.length; i++) {
    if (gameStarted) {
      for (let j = 0; j < boundary.length; j++) {
        boundary[j].style.backgroundColor = "red";
      }
      statusDiv.innerHTML = "You Lose";
      setTimeout(() => {
        resetGameState();
      }, 500);
    }
  }
});

restart.addEventListener("click", function () {
  resetGameState();
  num_win.innerHTML = 0;
  num_lose.innerHTML = 0;
  statusDiv.innerHTML = 'Click the "S" to begin.';
});
