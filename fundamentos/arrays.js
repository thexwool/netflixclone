const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //não gera erro, undefined.

valores[4] = 10
console.log(valores)
valores[10] = 20
console.log(valores)

console.log(valores.length)
valores.push({id: 3}/*objeto*/, false, null, 'teste') //adicionar novos elementos
console.log(valores)

valores.pop() //deleta o ultimo nó
delete valores[0] //deleta o item mas o nó permanece
console.log(valores)

console.log(typeof valores)