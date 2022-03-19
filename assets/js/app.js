let cards = document.querySelectorAll(".grid__article")

let speed = 5000
let randomFaster = document.querySelector(".random-faster")
let randomSlower = document.querySelector(".random-slower")
let randomSpeed = document.querySelector(".random-speed")
randomFaster.addEventListener("click", function() {
    speed += 500
    randomSpeed.textContent = speed / 1000
})
randomSlower.addEventListener("click", function() {
    if (speed > 500) {
        speed -= 500
    }
    randomSpeed.textContent = speed / 1000
})

let delay = 2500
let delayFaster = document.querySelector(".delay-faster")
let delaySlower = document.querySelector(".delay-slower")
let delaySpeed = document.querySelector(".delay-speed")
delayFaster.addEventListener("click", function() {
    delay += 500
    delaySpeed.textContent = delay / 1000
})
delaySlower.addEventListener("click", function() {
    if (delay > 1000) {
        delay -= 500
    }
    delaySpeed.textContent = delay / 1000
})

let reset = document.querySelector(".reset")
reset.addEventListener("click", function() {
    for (let card of cards) {
        card.style.transition = "transform 0s"
        card.style.transform = "rotate(0deg)"
        card.children[0].style.display = "block"
        card.children[0].style.opacity = "1"
        card.children[1].style.display = "none"
        card.children[1].style.opacity = "0"
        card.children[1].style.transform = "rotate(0deg)"
        clear()
        speed = 5000
        randomSpeed.textContent = speed / 1000
        delay = 2500
        delaySpeed.textContent = delay / 1000
    }
})

let pause = document.querySelector(".pause")
pause.addEventListener("click", function() {
    clear()
})

let clear = function() {
    let highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
}

let play = document.querySelector(".play")
play.addEventListener("click", function() {
    for (let card of cards) {
        card.style.transition = "transform 1s"
        rotateInitiate(card)
    }
})

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
        card.children[0].style.opacity = "0"
        card.children[1].style.opacity = "1"
        let rotateCard = function() {
            card.children[0].style.display = "none"
            card.children[1].style.display = "block"
            card.children[1].style.transform = "" + axe + "("+ degre +")"
        }
        setTimeout(rotateCard, 350)
    }

    let rotateLaunch = function() {
        rotate(card, axe, degre)
        setTimeout(replaceLaunch, Math.random() * speed + delay)
    }

    let replaceLaunch = function() {
        replace(card, axe)
    }

    setTimeout(rotateLaunch, Math.random() * speed + delay)
}

let replace = function(card, axe) {
    let degre = "0deg"

    card.style.transform = "" + axe + "("+ degre +")"
    card.children[0].style.opacity = "1"
    card.children[1].style.opacity = "0"
    let replaceCard = function() {
        card.children[0].style.display = "block"
        card.children[1].style.display = "none"
        card.children[1].style.transform = "" + axe + "("+ degre +")"
    }
    setTimeout(replaceCard, 350)

    rotateInitiate(card)
}

for (let card of cards) {
    rotateInitiate(card)
}