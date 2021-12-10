let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //negando duas vezes para converter para boolean

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || ' '))

let nome1 = ''
console.log(nome1 || 'Desconhecido')

let nome2 = 'Allan'
console.log(nome2 || 'Desconhecido')