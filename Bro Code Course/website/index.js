//52:16

const PI = 3.14159
let radius
let circum

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value
    radius = Number(radius)
    circum = 2 * PI * radius
    document.getElementById("myP").textContent = `Result: ${circum}`
}