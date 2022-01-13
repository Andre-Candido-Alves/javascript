//Não consegui fazer sozinho

let input = document.querySelector('input#fnum')
let lista = document.querySelector('select#select')
let res = document.querySelector('div#res')
let valores = [] 

function testeNum(n){ //função pra ver se o número é valido (entre 1 e 100)
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function testeExist(n, l){ //função para ver se já tem esse numero no array
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){ //função pra adicionar os valores
    if(testeNum(input.value) && !testeExist(input.value, valores)){
        valores.push(Number(input.value)) //adicionando valor
        let item = document.createElement('option') //adicionando option
        item.text = `Valor ${input.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //zerando o res (a parte que fica o finalizar)
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    input.value = '' //limpando o input
    input.focus() //vai ficar com o foco no input como se vc tivesse clicado
} 
function finalizar(){
    if (valores.length == 0){ //vendo se está vazio o vetor
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        //descobrindo o maior e menor número
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos] //fazendo a soma
            if (valores[pos] > maior){ //maior numero
                maior = valores[pos]
            }
            if (valores[pos] < menor){ //menor numero
                menor = valores[pos]
            }
        }
        media = soma / tot //media
        res.innerHTML = '' //zerando o res
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}

/*
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#select')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('tudo ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}*/