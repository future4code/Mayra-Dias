//1 Herança - a) Sim.
//b) Uma vez.

class User {
	private id: string;
	private email: string;
	private name: string;
	private password: string;
	private introduce: string
  
	constructor(
		  id: string,
		  email: string,
		  name: string,
		  password: string,
		  introduce: string
	  ){
		  console.log("Chamando o construtor da classe User")
		  this.id = id
		  this.email = email
		  this.name = name 
		  this.password = password
		  this.introduce = introduce

	 }
	 public interoduceYourself(): string {
		return `Olá, sou ${this.name}. Bom dia!`
	 }
	  public getId(): string {
		  return this.id
	  }
  
	  public getEmail(): string {
		  return this.email
	  }
  
	  public getName(): string {
		  return this.name
	  }
	  insert(id:string, name:string, password:string, introduce:string){
		  const metodo = {
			  id,
			  name,
			  password,
			  introduce
		  }
	  }
  }

const usuario = new User('001', 'May', 'mb509311@gmail.com', '123456', 'Olá, bom dia!')
console.log(usuario)


//2 - a) Duas vez.
//b) Uma vez.

class Customer extends User {
	public purchaseTotal: number = 0;
	private creditCard: string;
  
	constructor(
	  id: string,
	  email: string,
	  name: string,
	  password: string,
	  creditCard: string,
	  introduce: string
	) {
	  super(id, email, name, password, introduce);
	  console.log("Chamando o construtor da classe Customer");
	  this.creditCard = creditCard;
	}
  
	public getCreditCard(): string {
	  return this.creditCard;
	}
  }
 const usuario2 = new Customer('002', 'Ana', 'ana@gmail.com', '123456', 'Credito', 'Olá, bom dia!') 
 console.log(usuario2)

// - 3 a)Sim, Porque ela é uma string.

//1 Polimorfismo - a) Nenhuma.

export interface Client {
	
	name: string;
	// Refere-se ao nome do cliente
  
	registrationNumber: number;
	// Refere-se ao número de cadastro do cliente na concessionária
	  // como se fosse um id
  
	consumedEnergy: number;
	// Refere-se à energia consumida pelo cliente no mês
  
	calculateBill(): number;
	// Retorna o valor da conta em reais
  }
  const client: Client = {
	name: "Goli",
	registrationNumber: 1,
	consumedEnergy: 100,
  
	calculateBill: () => {
	  return 2;
	}
  }
  console.log(client.calculateBill())

  export abstract class Place {
	constructor(protected cep: string) {}
  
	  public getCep(): string {
		  return this.cep;
	}
  }
