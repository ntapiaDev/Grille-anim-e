let cards = document.querySelectorAll(".grid__article")
let cardsImg = document.querySelectorAll(".grid__article img")
let cardsDiv = document.querySelectorAll(".grid__article div")

let rotate = function(direction, degre) {
    for (let card of cards) {
        card.style.transform = "" + direction + "("+ degre +")" // this.style.transform
    }

    for (let cardImg of cardsImg) {
        cardImg.style.display = "none"
    }

    for (let cardDiv of cardsDiv) {
        cardDiv.style.display = "block"
        cardDiv.style.transform = "" + direction + "("+ degre +")"
    }
}

rotate("rotateY", "-180deg")

// replace()