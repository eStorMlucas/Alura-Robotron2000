const robo = document.querySelector("[data-cor]")
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
var dataCores = ["branco", "rosa", "vermelho", "amarelo", "azul"]

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },

    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca) 
    })  
}) 

function manipulaDados(conteudo, controle, peca) {
    const controlador = controle.querySelector("[data-contador]")

    if (conteudo === "+") {
        controlador.value = parseInt(controlador.value) + 1
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]  
        })
    } else {
        controlador.value = parseInt(controlador.value) - 1
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]  
        })
    }
}

robo.addEventListener("click", () => {
    robo.dataset.cor = parseInt(robo.dataset.cor) + 1

    if (robo.dataset.cor >= 5) {
        robo.dataset.cor = 0
    } 
   
    robo.attributes.src.value = "img/robotron/" + dataCores[robo.dataset.cor] + ".png"
})
