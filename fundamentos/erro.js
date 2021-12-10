function tratarErroLancar(erro){
    throw new Error("Erro ocorrido!")
    //throw 'Erro ocorrido'
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(erro){
        tratarErroLancar(erro)
    }finally{
        console.log('Encerrado')
    }
}

let obj = { name: "Roberto" }
//let obj = { name: "Roberto" }
imprimirNomeGritado(obj)