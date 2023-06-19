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
    "nucleos": {
        "forca": 0,
        "poder": 7, 
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21, 
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28, 
        "energia": 0,
        "velocidade": -2
    }
}
const estatistica = document.querySelectorAll("[data-estatistica]");
function somarFuncao(nome, somar) {
    somar.addEventListener("click", (event) => {
        nome.value = parseInt(nome.value) + 1;
    })
}
function subtrairFuncao(nome, subtrair) {
    subtrair.addEventListener("click", (event) => {
        if (parseInt(nome.value) >= 1) {
            nome.value = parseInt(nome.value) - 1;
        }
    })
}
function operacao(nome, somar, subtrair) { 
    somarFuncao(nome, somar);
    subtrairFuncao(nome, subtrair);
}
operacao(document.querySelector("#braco"), document.querySelector("#somarBraco"), document.querySelector("#subtrairBraco"));
operacao(document.querySelector("#blindagem"), document.querySelector("#somarBlindagem"), document.querySelector("#subtrairBlindagem"));
operacao(document.querySelector("#nucleos"), document.querySelector("#somarNucleos"), document.querySelector("#subtrairNucleos"));
operacao(document.querySelector("#pernas"), document.querySelector("#somarPernas"), document.querySelector("#subtrairPernas"));
operacao(document.querySelector("#foguetes"), document.querySelector("#somarFoguetes"), document.querySelector("#subtrairFoguetes"));

function atualizaEstatistica(peca) {
    console.log("[peca]");
}