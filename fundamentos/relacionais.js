let teste1 = '1'
let teste2 = 1

console.log('\nTeste1 é',typeof(teste1))
console.log('Teste2 é',typeof(teste2))

console.log('\n01) teste1 == teste2 ->',teste1 == teste2) //igual
console.log('02) teste1 === teste2 ->',teste1 === teste2) //estritamente igual

console.log('\n03) teste1 != teste2 ->',teste1 != teste2) //diferente
console.log('04) teste1 !== teste2 ->',teste1 !== teste2) //estritamente diferente

const d1 = new Date(0)
const d2 = new Date(0)
console.log('\n05) d1 == d2 ->',d1 == d2)
console.log('06) d1 === d2 ->',d1 === d2)
//dá false pois será comparado o endereço da memoria

console.log('\n07) undefined == null ->',undefined == null)
console.log('08) undefined === null ->',undefined === null)
