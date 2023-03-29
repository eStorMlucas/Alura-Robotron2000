const botaoExibe = document.querySelector("[data-exibe]")
const botaoEsconde = document.querySelector("[data-esconde]")
const lista = document.querySelector("[data-lista]")

botaoEsconde.addEventListener("click", () => {
    lista.hidden = true
})

botaoExibe.addEventListener("click", () => {
    lista.hidden = false
})
