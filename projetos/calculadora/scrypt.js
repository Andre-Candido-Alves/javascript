var numbers = document.querySelectorAll(".numero")
var operacao = document.querySelectorAll(".operacao")
var tela = document.querySelector(".max-calc input")
var limpar = document.querySelector(".limpar")
limpar.addEventListener("click", apagarTudo)
var apagarUltimo = document.querySelector(".apagarUlt")
apagarUltimo.addEventListener("click", removerUltimaString)

var numero1 = 0
var numero2 = 0
var operacaoEscolhida = ""

var escolOper = false //escolhi operação
var resultadoTela = false

numbers.forEach(elemento => {elemento.addEventListener("click", addNumero)})
operacao.forEach(elemento => {elemento.addEventListener("click", definirOperacao)})

document.querySelector(".igual").addEventListener("click", resultado)

function addNumero(numero){
    if(resultadoTela){
        apagarTudo()
    }

    numAtual = (this.querySelector("span").innerText)
    //console.log(numAtual)
    tela.value += numAtual

    if(escolOper == true){
        numero2 += numAtual
    }
}

function apagarTudo(){
    tela.value = ""
    escolOper = false
    numero2 = 0
    resultadoTela = false
}

function definirOperacao(){
    if(escolOper == false){
        valorTecla = this.querySelector("span").innerText
        tudoTela = parseFloat(tela.value)

        numero1 = tudoTela
        tela.value += valorTecla
        operacaoEscolhida = valorTecla

        escolOper = true
    } 
}

function removerUltimaString(){
    if(resultadoTela){
        apagarTudo()
    }

    caracteres = tela.value.length

    if(escolOper){ //escolheu a operação, logo pode se tratar do segundo número
        if(numero2>0){ //esta removendo algo do numero 2 afinal ele existe e é maior do que 0
            novosNumeros = tela.value.substring(0, caracteres - 1)
            tela.value = novosNumeros

            caracteresNum2 = numero2.length
            numero2 = numero2.substring(0, caracteresNum2 - 1)
        } else {
            tela.value = tela.value.substring(0, caracteres - 1)
            operacaoEscolhida = ""
            escolOper = false
        }
    } else {
        tela.value = tela.value.substring(0, caracteres - 1)
    }
}

function resultado(){
    if(!resultadoTela){
        switch (operacaoEscolhida) {
            case "+":
            final = parseFloat(numero1) + parseFloat(numero2)
                break;
            case "-":
                final = parseFloat(numero1) - parseFloat(numero2)
                break;
            case "*":
                final = parseFloat(numero1) * parseFloat(numero2)
            break;
            case "/":
                final = parseFloat(numero1) / parseFloat(numero2)
                break;
        }

        tela.value += ` = ${final}`
        resultadoTela = true
    }
}