{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera) //a variavel VAR dentro de um bloco ficará visivel para todos, inclusive quem está fora do bloco

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) gera um erro pois o bloco está vinculado a uma função