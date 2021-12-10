//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // vai somar 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6) //funciona, vai pegar os dois primeiros e ignorar o resto
imprimirSoma()

//Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(3, 6))
console.log(soma(2))
console.log(soma())