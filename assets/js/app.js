let cards = document.querySelectorAll(".grid__article")

let rotateInitiate = function(card) {
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

    let rotate = function (card, axe, degre) {
        card.style.transform = "" + axe + "("+ degre +")"
        card.children[0].style.display = "none"
        card.children[1].style.display = "block"
        card.children[1].style.transform = "" + axe + "("+ degre +")"
    }

    let rotateLaunch = function() {
        rotate(card, axe, degre)
        setTimeout(replaceLaunch, Math.random() * 5000 + 2500)
    }

    let replaceLaunch = function() {
        replace(card, axe)
    }

    setTimeout(rotateLaunch, Math.random() * 5000 + 2500)
}

let replace = function(card, axe) {
    let degre = "0deg"

    card.style.transform = "" + axe + "("+ degre +")"
    card.children[0].style.display = "block"
    card.children[1].style.display = "none"
    card.children[1].style.transform = "" + axe + "("+ degre +")"

    rotateInitiate(card)
}

for (let card of cards) {
    rotateInitiate(card)
}