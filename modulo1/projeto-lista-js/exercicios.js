// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
const soma= (3,5)
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {

  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
   const altura = prompt("Digite a altura do retângulo.")
   const largura = prompt("Digite a largura do retângulo.")
   const multiplicacao = altura * largura 
  
  console.log(multiplicacao)

}

// EXERCÍCIO 02
function imprimeIdade() {
   const anoAtual = prompt("Qual o ano atual?")
   const ano = prompt("Em que ano você nasceu?")
   const idade = anoAtual - ano
   console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
   const resultado= peso / (altura * altura);
   return resultado

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
   const nome = prompt("Qual o seu nome?")
   const idade= prompt("Qual a sua idade?")
   const email= prompt("Digite seu e-mail.")

   console.log(imprimeInformacoesUsuario)
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
   const coresA= prompt("Diga uma cor favorita.")
   const coresB=prompt("Outra cor favorita.")
   const coresC=prompt("A última cor")
   const cores=[coresA, coresB, coresC]
   console.log(cores)
 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  console.log(string)
  const retornaStringEmMaiuscula = string.toUpperCase()
  console.log(string.toUpperCase)
  return retornaStringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const vendidos= (custo / valorIngresso)
  console.log(vendidos)
  return vendidos

}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const duasStrings= string1.length === string2.length
  return duasStrings

}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const arrayA= array[0]
  console.log(arrayA)
  return arrayA
}
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const arrayB = [array][0]
  console.log(arrayB)
  return arrayB
  
}
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    
  // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {}
  // implemente sua lógica aqui
}