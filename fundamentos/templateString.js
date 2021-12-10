//Comum
const nome = "Rebeca"
const concat = "Olá" + nome + "!"

//Template
const template = `
    Olá
    ${nome}!`

console.log(concat, template)

//expressoes
let num1 = 10
let num2 = 10
console.log(`1 + 1 = ${num1 + num2}`)

//template com função arrow
const up = texto => texto.toUpperCase() //função arrow
console.log(`Ei... ${up('cuidado')}!`)