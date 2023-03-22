"use strict"

const menorValor = 1
const maiorValor = 100

const numeroSecreto = gerarNumeroAleatorio(maiorValor)

function gerarNumeroAleatorio(maiorValor){
    return parseInt(Math.random()*maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menorValor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maiorValor')
elementoMaiorValor.innerHTML = maiorValor

console.log(numeroSecreto)