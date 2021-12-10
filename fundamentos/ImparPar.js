function verifica(num){
    if(num % 2 == 0){
        return 1
    }else{
        return 0
    }
}

let leitura = 150
let resultado = verifica(leitura)

if(resultado){
    console.log('O número',leitura,'é par')
}else{
    console.log('O número',leitura,'é ímpar')
}