function contar(){
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    res.innerHTML = 'Preparando a contagem...'

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar`
    } 
    
   /* else if(passo.value.length == 0){
        alert('Passo inválido! Considerando PASSO 1')

        for(var c = Number(inicio.value); c <= Number(fim.value); c++ ){
            seila = seila + c + ' &#x1F449; '
        }
        res.innerHTML = `Contando: <br> ${seila} &#x1F3C1;` 
        }*/
    
    else { //para contar para trás se o fim for maior que o inicio
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            //resolvendo problema caso a pessoa coloque passo 0 ou menor
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i < f) { 
            //contando para frente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`   
            }
        } else { 
            //contando para tras
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
                //seila = seila + c + ' &#x1F449; ' <-- jeito antigo que eu estava fazendo, pq não sabia que o innerHTML podia receber ele msm como se fosse uma variavel
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
    


