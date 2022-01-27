//a) Node é onde conseguimos executar os programas no javascript

//b)
console.log(process.argv[0])
console.log(process.argv[1])
console.log(process.argv[2])
console.log(process.argv[3])
console.log(process.argv[4])

const nome= (process.argv[2])
const idade= Number(process.argv[3])

const resultado= `Olá, ${nome}! Você tem ${idade} anos.`

console.log(resultado)

//c)
const nome= (process.argv[2])
const idade= Number(process.argv[3]) 
const novaIdade= Number(process.argv[4]) 


const soma= idade + novaIdade[7]
const resultado= `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`

console.log(resultado)
