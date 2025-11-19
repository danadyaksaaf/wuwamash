//GATHER THE IMAGE
const pics = document.getElementById('pics')
const pics2 = document.getElementById('pics2')
const pics3 = document.getElementById('pics3')

//BUTTONS FILLED WITH IMAGE
const leftButton = document.getElementById('choice1')
const MiddleButton = document.getElementById('choice2')
const RightButton = document.getElementById('choice3')

// GATHER SOME HEADERS
const subTitle = document.getElementById('subtitle')
const mainTitle = document.getElementById('main-title')

// TOP #1 CHOICE CONTAINER
var topImg = document.getElementById('topPics')

// LOOP ROUNDS UNTIL 8 ROUNDS
let round = 0

//RANK GIRLS EACH 3 CHOICES
let firstGirlChoice = 0
let secondGirlChoice = 0
let thirdGirlChoice = 0

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

// CONDITION WHEN ROUND ENDS
function endRoundsAndShowFeatured() {
    leftButton.remove()
    RightButton.remove()
    MiddleButton.remove()
    subTitle.remove()
    mainTitle.remove()

    // save counts to localStorage as JSON
    try {
        localStorage.setItem('wuwamash_counts', JSON.stringify(counts))
    } catch (e) {
        console.error('Could not save counts to localStorage', e)
    }

    // navigate to featured page
    window.location.href = './html/featured.html'
}

const counts = {}
pictures.forEach(p => counts[p] = 0)

function getPictureKeyFromImg(imgElement) {
    const src = imgElement && imgElement.src ? imgElement.src : ''
    const filename = src.split('/').pop() || ''
    // find picture entry that ends with same filename (handles './images/0001.webp' vs absolute URL)
    return pictures.find(p => p.endsWith(filename)) || null
}

// BUTTONS THAT TRIGGERS RANDOM IMAGES AND round TO STOP

function buttonAction1() {
    const key = getPictureKeyFromImg(pics)
    if (key && counts[key] !== undefined) counts[key]++

    const picsdice2 = Math.floor(Math.random() * pictures.length)
    const picsdice3 = Math.floor(Math.random() * pictures.length)
    pics2.src = pictures[picsdice2]
    pics3.src = pictures[picsdice3]

    firstGirlChoice++
    round++

    if (firstGirlChoice === 3) {
        topImg.src = pics.src
    }

    if (round === 8) {
        endRoundsAndShowFeatured()
    }
}

function buttonAction2() {
    const key = getPictureKeyFromImg(pics2)
    if (key && counts[key] !== undefined) counts[key]++

    const picsdice = Math.floor(Math.random() * pictures.length)
    const picsdice3 = Math.floor(Math.random() * pictures.length)
    pics.src = pictures[picsdice]
    pics3.src = pictures[picsdice3]

    secondGirlChoice++;
    round++

    if (secondGirlChoice === 3) {
        topImg.src = pics2.src
    }

    if (round === 8) {
        endRoundsAndShowFeatured()
    }
}

function buttonAction3() {

    const picsdice2 = Math.floor(Math.random() * pictures.length)
    const picsdice = Math.floor(Math.random() * pictures.length)
    pics2.src = pictures[picsdice2]
    pics.src = pictures[picsdice]

    const key = getPictureKeyFromImg(pics3)
    if (counts[key] !== undefined) counts[key]++

    thirdGirlChoice++;
    round++;

    if (thirdGirlChoice === 3) {
        topImg.src = pics3.src
    }

    if (round === 8) {
        endRoundsAndShowFeatured()
    }
}