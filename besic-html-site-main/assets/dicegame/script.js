const arr = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]

var result1 = arr[Math.floor(Math.random() * 6)]

var result2 = arr[Math.floor(Math.random() * 6)]

document.querySelectorAll("img")[1].setAttribute("src", result1)

document.querySelectorAll("img")[2].setAttribute("src", result2)

var won = null

if(result1 > result2) {
    won = "player 1 is won"
} else if(result1 === result2) {
    won = "Match draw"
} else {
    won = "player 2 is won"
}
document.querySelector("h1").innerHTML = won

function refresh() {
    window.location.reload("Refresh")
}