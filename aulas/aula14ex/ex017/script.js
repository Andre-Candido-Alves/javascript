//jeito que eu fiz
function tabuada(){
    var numero = document.querySelector('input#numero')
    var res = document.querySelector('select#res')

    var string = ''
    if(numero.value.length == 0){
        alert('Por favor, digite um número!')
    }
    else{ 
        for (var c = 1; c<=10; c++){
            string = string + `<option value="valor${c}">${numero.value} X ${c} = ${c * Number(numero.value)}</option>`
        }
        res.innerHTML = string
    }
}

/* Jeito do professor:*/
/*
function tabuada(){
    let num = document.querySelector('input#numero')
    let tab = document.querySelector('select#res')
    if (num.value.length == 0) {
        alert('Por favor digite um número')
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //limpando a tabuada passada
        while(c <= 10){
            let item = document.createElement('option') //criando um option
            item.text = `${n} X ${c} = ${n*c}` //conteudo desse option
            item.value = `tab${c}` //colocando o value automatico no option
            tab.appendChild(item)
            c++
        }
    }
}*/