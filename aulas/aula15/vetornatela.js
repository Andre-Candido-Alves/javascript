let valores = [8, 1, 7, 4, 2, 9]
valores.sort() //deixando na ordem crescente

//console.log(valores) //forma padrão de executar mas sem nenhuma formatação, é meio feia

/*//forma de mostrar cada valor com um formatação, mostrando cada um de uma vez em um laço
for(let pos = 0; pos < valores.length; pos++){ 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//maneira mais simplificada:
for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}