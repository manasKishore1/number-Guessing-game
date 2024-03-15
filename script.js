const count = document.getElementById("num")
let num = 0

const random_num = Math.floor(Math.random() * 7)





document.getElementById("increase").onclick = function () {
    num++
    if (num > 6) {
        num = 6
        alert("Selection Of number cannot exceed 6")
    }
    count.textContent = num
}
document.getElementById("decrease").onclick = function () {
    num--
    if (num < 0) {
        num = 0
        alert("number below 0 is not possible to be selected")
    }
    count.textContent = num
}
document.getElementById("submit").onclick = function () {
    if (count.textContent == random_num) {
        document.getElementById("header").textContent = `You Guessed the number ${num} and you won , wait 3 seconds to play again`



    } else {
        document.getElementById("header").textContent = `You lost, You Choose ${num} and computer choose ${random_num},  wait 3 seconds to play again`
        setTimeout(function () {
            location.reload();
        }, 3000)
    }

}