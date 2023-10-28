var gameStarted = false


const startDiv = document.getElementById('start')
const endDiv = document.getElementById('end')
const statusDiv = document.getElementById('status')
const Maze = document.getElementById('maze')
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

//  // exo2
for (let i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseover", function() {
        if (gameStarted) {
            for (let j = 0; j < boundary.length; j++) {
                boundary[j].style.backgroundColor = "red";
            }
            statusDiv.innerHTML = "You Lose"
            setTimeout(() => {
                resetGameState()
            }, 500)
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
endDiv.addEventListener("mouseover", function() {
    console.log("hovederd end")
    if (gameStarted) {

        statusDiv.innerHTML = "You Win"
        gameStarted = false;

    }
})


// exo4
startDiv.addEventListener("click", function() {

    if (!gameStarted) {
        gameStarted = true;
        statusDiv.innerHTML = "Game started"
    }

})


startDiv.addEventListener("mouseover", function() {

    if (!gameStarted) {
        gameStarted = true;
        statusDiv.innerHTML = "Game started"
    }

})

// exo5


// Function to reset the game state
function resetGameState() {

    for (let i = 0; i < boundary.length; i++) {
        boundary[i].style.backgroundColor = "#eeeeee"
    }

    gameStarted = false

}

// Function to check if players are cheating
Maze.addEventListener("mouseleave", function(event) {

    console.log("mouse leave ")
    for (let i = 0; i < boundary.length; i++) {
        if (gameStarted) {
            for (let j = 0; j < boundary.length; j++) {
                boundary[j].style.backgroundColor = "red";
            }
            statusDiv.innerHTML = "You Lose"
            setTimeout(() => {
                resetGameState()
            }, 500)
        }
    }


});