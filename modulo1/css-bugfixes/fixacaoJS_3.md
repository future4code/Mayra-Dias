//Exercícios de Fixação de Javascript - Treino 3 
```
function calculaNota (ex, p1, p2){
const calcularMedia = (ex + p1 + p2) / 3

if(calcularMedia >= 9 ){
  return "A"
}else if((calcularMedia < 9) && (calcularMedia >= 7.5)){
  return "B"
}else if((calcularMedia < 7.5) && (calcularMedia >= 6)){
  return "C"
}else if(calcularMedia < 6 ){
  return"D"
}}
```