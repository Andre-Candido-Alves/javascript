function verificar(){
    var data = new Date
    ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){ //verificando se o ano não esta vazio ou maior que o ano atual
        alert('Verifique os dados e tente novamente') //mostrando o erro caso seja verdadeiro
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //calculando idade
        res.innerHTML = `idade calculada ${idade}` //mostrando a idade
        var gênero = '' //Descobrindo o sexo
        var img = document.createElement('img') //criando tag img dinamicamente
        img.setAttribute('id','foto') //colocando um id para tag img acima

        if (fsex[0].checked) { //Descobrindo o sexo
            gênero = 'Homem'

            //descobrindo estado do individuo de sexo masculino
            if(idade >=0 && idade <10){ 
                //criança
                img.setAttribute('src', 'fotos/foto-bebe-m.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/foto-jovem-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','fotos/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','fotos/foto-idoso-m.png')
            }

        } else{
            gênero = 'Mulher'

            //descobrindo estado do individuo de sexo feminino
            if (idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src','fotos/foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','fotos/foto-jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','fotos/foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','fotos/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //centralizando resultado
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos` //mostrando idade e ano
        res.appendChild(img) //adicionando elemento em baixo / um elemento filho, nesse caso a imagem/ mostrando a variavel img que criamos la em cima 
    }
}