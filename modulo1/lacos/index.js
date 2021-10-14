// Exercícios de escrita de código 
// 1- Acho que 5
//2- a) 10, 11, 12, 15.
//3 = 4


// Exercícios de escrita de código
//1-
//  let pet = Number(prompt("Quantos bichinhos de estimação você tem?"));
//  let listaDeNomes= []
 
//   if(pet > 0){
//      let quantidadeDePets= 0
//         while(quantidadeDePets < pet){
//          let nomeDePets= prompt("Digite o nome deles um por um.")
//           listaDeNomes.push(nomeDePets)
//             quantidadeDePets ++
        
//          }
// }else{

//  console.log("Que pena! Você pode adota um pet!")

// }

// console.log(listaDeNomes)

//2 a)
//  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//  console.log(arrayOriginal)

// b)
//for(let numero of arrayOriginal){
//console.log(numero / 10)
//}

// c)
//  const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//  const resultado= []
//  for (let numero of array){
//     if(numero % 2 ===0){
//     resultado.push(numero)
//     }
//  }
//  console.log(resultado)

// d)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const resultado= []
// for(let i= 0; i < arrayOriginal.length; i++){
//  resultado.push(`O elemento do Índice ${i} é ${arrayOriginal[i]}`)
// }
// console.log(resultado)

// e)
// function valorMaximo(arrayOriginal){
// let valorMaximo= arrayOriginal[0]

// for (let i = 1; i < arrayOriginal.length; i++){
//     if(arrayOriginal[i] > valorMaximo){
//         valorMaximo = arrayOriginal[i]
//        }
//    }
//    return valorMaximo
//}
 
// const numeros=  [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const maiorNumero = valorMaximo(numeros)
// console.log(maiorNumero)

// //
// function valorMinimo(arrayOriginal){
//     let valorMinimo= arrayOriginal[0]
    
//     for (let i = 1; i < arrayOriginal.length; i++){
//         if(arrayOriginal[i] < valorMinimo){
//             valorMinimo = arrayOriginal[i]
//            }
//        }
//        return valorMinimo
//     }
          
//     const numero=  [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//     const menorNumero = valorMinimo(numero)
//     console.log(menorNumero)

//     console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)