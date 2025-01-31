
const decreaseBtn = document.querySelector("button#decreaseBtn")
const increaseBTN = document.querySelector("button#increaseBTN")
const resetBtn = document.querySelector("button#resetBtn")

const countlabel = document.querySelector("label#countlabel")

let count = 0

decreaseBtn.onclick = decrease
resetBtn.onclick = reset
increaseBTN.onclick = increase

function reset(){
    count = 0
    countlabel.textContent = count
}

function increase(){
    count++
    countlabel.textContent = count
}

function decrease(){
    count--
    countlabel.textContent = count
}







