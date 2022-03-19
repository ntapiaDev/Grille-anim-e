let cards = document.querySelectorAll(".grid__article")
let cardsImg = document.querySelectorAll(".grid__article img")
let cardsDiv = document.querySelectorAll(".grid__article div")

let rotate = function (card, direction, degre) {
    card.style.transform = "" + direction + "("+ degre +")"
    card.children[0].style.display = "none"
    card.children[1].style.display = "block"
    card.children[1].style.transform = "" + direction + "("+ degre +")"
}

for (let card of cards) {
    let axe
    let degre

    if (Math.random() >= 0.5) {
        axe = "rotateY"
    } else {
        axe = "rotateX"
    }

    if (Math.random() >= 0.5) {
        degre = "-180deg"
    } else {
        degre = "180deg"
    }

    let countdown = Math.random()*3000
    let rotateInitiate = function() {
        rotate(card, axe, degre)
    }

    setTimeout(rotateInitiate, countdown)
}

// replace()