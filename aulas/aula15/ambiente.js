let num = [5,8,2,9,3] //declarando o array
num.push(1) //adicionando o valor um na posição final
num.sort() // organizando em ordem crescente

console.log(num) 
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(8) // variavel pos vai receber a chave de onde se encontra o valor 8 (caso exista)
console.log(`O valor 8 está na posição ${pos}`)