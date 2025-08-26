//GATHER THE IMAGE
const pics = document.getElementById('pics')
const pics2 = document.getElementById('pics2')
const pics3 = document.getElementById('pics3')

//BUTTONS FILLED WITH IMAGE
const leftButton = document.getElementById('choice1')
const MiddleButton = document.getElementById('choice2')
const RightButton = document.getElementById('choice3')

// TOP #1 CHOICE CONTAINER
var topImg = document.getElementById('topPics')

// LOOP COUNTER UNTIL 8 ROUNDS
let counter = 0;

const pictures = new Array(
    './images/0001.webp',
    './images/0002.webp',
    './images/0003.webp',
    './images/0004.webp',
    './images/0005.webp',
    './images/0006.webp',
    './images/0007.webp',
    './images/0008.webp',
    './images/0009.webp',
    './images/0010.webp',
    './images/0011.webp',
    './images/0012.webp',
    './images/0013.webp',
    './images/0014.webp',
    './images/0015.webp',
    './images/0016.webp',
    './images/0017.webp',
    './images/0018.webp',
    //'./images/0019.webp',

)

//TRIGGER RANDOM IMAGES
var picsdice = Math.floor(Math.random() * pictures.length)
var picsdice2 = Math.floor(Math.random() * pictures.length)
var picsdice3 = Math.floor(Math.random() * pictures.length)

window.onload = function () {
    pics.src = pictures[picsdice]
    pics2.src = pictures[picsdice2]
    pics3.src = pictures[picsdice3]
}

// BUTTONS THAT TRIGGERS RANDOM IMAGES AND COUNTER TO STOP

function buttonAction1() {
    const picsdice2 = Math.floor(Math.random() * pictures.length)
    const picsdice3 = Math.floor(Math.random() * pictures.length)
    pics2.src = pictures[picsdice2]
    pics3.src = pictures[picsdice3]
    topImg.src = pics.src;
    counter++;
    if (counter === 8) {
        leftButton.remove()
        RightButton.remove()
        MiddleButton.remove()
    }
}

function buttonAction2() {
    const picsdice = Math.floor(Math.random() * pictures.length)
    const picsdice3 = Math.floor(Math.random() * pictures.length)
    pics.src = pictures[picsdice]
    pics3.src = pictures[picsdice3]
    topImg.src = pics2.src;
    counter++;

    if (counter === 8) {
        leftButton.remove()
        RightButton.remove()
        MiddleButton.remove()
    }
}

function buttonAction3() {
    const picsdice2 = Math.floor(Math.random() * pictures.length)
    const picsdice = Math.floor(Math.random() * pictures.length)
    pics2.src = pictures[picsdice2]
    pics.src = pictures[picsdice]
    topImg.src = pics3.src;
    counter++;

    if (counter === 8) {
        leftButton.remove()
        RightButton.remove()
        MiddleButton.remove()
    }
}