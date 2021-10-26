// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const quantidade= array.length
   return quantidade
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertida = array
    arrayInvertida.reverse();
    return arrayInvertida
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordemCrescente = array
  ordemCrescente.sort ((a, b) => a-b )
  return ordemCrescente
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
     const numerosPares = array
     return numerosPares.filter(array => (array %2)=== 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) { 
     const numerosElevados =  array.filter((numero ) => {
          return numero % 2 === 0
     }
       //return Math.pow(numerosElevados)
     
     
     )}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  while( i < array.length){
      if (array[i] > maiorNumero)
      maiorNumero = array[i]
  }
 i++
 return maiorNumero
 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 const maior= num1
 const menor= num2
     if (num1 > num2){
           maior=num1
           menor= num2
}else{

}

     let MaiorMenor = {numeroMaior: maior,
maiorDivisivelPorMenos: maior % menor ===0,
diferenca: maior-menor}
return MaiorMenor 
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
     const primeirosPares= n
     return primeirosPares.filter(n => (n %2)=== 0);
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    nome= 'O Diabo Veste Prada',
    ano= 2006,
    diretor= 'David Frankel',
    atores= ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    
    return (`Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    {
        nome= "Astrodev",
        idade= 25,
        email= "astrodev@labenu.com.br",
        endereco= "Rua do Futuro, 4"
    }
    
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) { 
    [{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}]

   if (altura >= 1.5 && idade >=14  <=60 ){

   } return pessoas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
const listaDeClientes = contas.map(clientes)  
    


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}