// File

// Video
const video = document.getElementById("video");

// Selected Elements
const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset");
const addButton = document.getElementById("add");

// Lanes
const aLane = document.getElementById("a");
const sLane = document.getElementById("s");
const wLane = document.getElementById("w");
const dLane = document.getElementById("d");

const vidLog = document.getElementById("vid-log");

const leftLane = document.getElementById("left");
const downLane = document.getElementById("down");
const upLane = document.getElementById("up");
const rightLane = document.getElementById("right");

//Speeds
const EASY_SPEED = 5; // Measured in px

//Time Dictionary
let levelArr = [
    [1.818401, "up"],
    [3.511137, "down"],
    [5.59368, "left"],
    [7.869861, "right"]
]

let levelArrIndex = 0;

let levelArr2 = {
    1: "up",
    3: "down",
}

let levelArr2index = 0;

// Target dictionaries
let aswdLists = {
    "Left": [],
    "down": [],
    "up": [],
    "right": []
}

let arrowLists = {
    "Left": [],
    "down": [],
    "up": [],
    "right": []
}

// Target Positions
const START_POSITION = 750;
const END_POSITION = -70;

//Save to File
const saveToFile = (str) => {

}


// Event Listeners
startButton.addEventListener("click", () => {
    console.log("Game Started!!!")
    video.play();

});

resetButton.addEventListener("click", () => {
    console.log("Game Reset!!!");
    video.pause();
    video.currentTime = 0;
});

addButton.addEventListener("click", () => {
    let time = video.currentTime;
    console.log(`Time Stamp: ${time}`);

    vidLog.textContent += `${time}\n`
    
});

const createNewTarget = (lane) => {
    let newTarget = document.createElement("div");
    position = START_POSITION;
    newTarget.classList.add("target");
    newTarget.style.top = `${START_POSITION}px`;
    lane.appendChild(newTarget);
    
}




const main = () => {
    // Disable Scrolling

    createNewTarget(upLane);
}

main();