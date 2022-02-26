class Transaction{
    private description:string;
    private value:number;
    private date:string

    constructor(description:string, value:number, date:string){
        this.description = description
        this.value = value
        this.date = date
    }
    public getDescription(){
        return this.description
    }
    public getValue(){
        return this.value
    }
    public getDate(){
        return this.date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(cpf: string, name: string, age: number,) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf(){
        return this.cpf
    }
    public getName(){
        return this.name
    }
    public getAge(){
        return this.age
    }
    public getBalance(){
        return this.balance
    }
    public getTransactions(){
        return this.transactions
    }
  insertTransaction(description:string, value:number, date:string){
      const newTransaction = {
          description, 
          value,
          date
      }
      console.log(newTransaction)
  }

  }

const user = new UserAccount('123.456.789-10', 'Maria', 20)
const transactions1 = new Transaction('Pagar as contas', 300, '10/01/2022')

user.insertTransaction(transactions1.getDescription(), transactions1.getValue(), transactions1.getDate())

console.log(user)

//1
//a) Construtor serve para inicializar variáveis. 
//c) Variáveis privadas só podem ser acessadas de dentro da própria classe.