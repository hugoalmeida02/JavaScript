const btn = document.querySelector("button#btn")
const label1 = document.querySelector("label#random1")
const label2 = document.querySelector("label#random2")
const label3 = document.querySelector("label#random3")

const max = 6
const min = 1

let randomNum1
let randomNum2
let randomNum3


btn.onclick = generate_random

function generate_random(){
    randomNum1 = Math.floor(Math.random() * max) + min
    randomNum2 = Math.floor(Math.random() * max) + min
    randomNum3 = Math.floor(Math.random() * max) + min
    label1.textContent = randomNum1
    label2.textContent = randomNum2
    label3.textContent = randomNum3
}