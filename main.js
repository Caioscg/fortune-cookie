//*** ------ Variables ------ ***//

const cookie = document.querySelector("#cookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const button = document.querySelector("button")
const luck = document.querySelector(".message")

//*** ------ Messages ------ ***//

const message = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Procure acender uma vela em vez de amaldiçoar a escurdão.",
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito."
]

//*** ------ Events ------ ***//

cookie.addEventListener("click", newMessage)
button.addEventListener("click", toggleScreen)

//*** ------ Functions ------ ***//

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function newMessage() {
    random = getRandom()
    luck.innerText = message[random]
    toggleScreen()
}

function getRandom() {
    return Math.round(Math.random() * 10)
}