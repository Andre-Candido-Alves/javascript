//função recursiva. isso que fizemos chama recursividade
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1) //dentro da funcao ja estamos chamando ela msm denovo
    }
}

console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
ou 5! = 5 x 4!

ou seja um fatorial de um numero pode ser calculado baseado no fatorial de um outro

n! = n x (n-1)! a não ser que seja fatorial de 1 pq fatorial de 1 é 1
*/ 