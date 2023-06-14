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