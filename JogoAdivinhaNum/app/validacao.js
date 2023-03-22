function verificaSeOChuteEUmValorValido(chute){
    const numero = +chute
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if (checarNumeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Número inválido: O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if (numero === numeroSecreto){
        document.body.innerHTML=`
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}

            <button id="jogarNovamente" Class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function checarNumeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id === "jogarNovamente"){
        window.location.reload()
    }
})
