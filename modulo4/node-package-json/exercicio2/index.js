console.log(process.argv[0])
console.log(process.argv[1])
console.log(process.argv[2])
console.log(process.argv[3])
console.log(process.argv[4])
console.log(process.argv[5])

const soma = Number(process.argv[2])
const subt = Number(process.argv[3])
const mult = Number(process.argv[4])
const div = Number(process.argv[5])

switch(operacao){
	case "soma":
		('Soma:', numero1 + numero2)
		break;
	case "subt":
		('Subtração:', numero1 - numero2)
		break;
    case "mult":
       ('Multiplicação:', numero1 * numero2)
       break;
    case "div": 
      ('Divisão:', numero1 / numero2)
       break;
}
console.log(operacao)


