const botao = document.querySelector("#calcular")
const resultado = document.querySelector(".resultado")

botao.addEventListener("click", (evento) => {
    resultado.innerHTML = "Fui clicado" 

})

const botao2 = document.querySelector("#calcular2")
const resultados = document.querySelectorAll(".resultado")

botao2.addEventListener("click", ()=> {
    
    for (var i = 0; i < 2; i++) {
        resultados[i].innerHTML = "Alguém clicou hein"
    }
})

const botao3 = document.querySelector("#reset")

botao3.addEventListener("click", ()=> {
    
    for (var i = 0; i < 2; i++) {
        resultados[i].innerHTML = ""
    }
})
