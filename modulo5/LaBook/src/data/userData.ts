import BaseDatabase from "./BaseDatabase"


type FindByEmail = {
    id: string,
    name: string,
    email: string,
    password: string
}[]

export default class UserData extends BaseDatabase{
  protected TABLE_NAME = "labook_users"

  findByEmail = async(email:string) => {
        try{
          const queryResult:FindByEmail = await BaseDatabase
          .connection(this.TABLE_NAME) 
          .select()
          .where({email})
          
          return[queryResult]

        }catch(error){
         throw new Error("Erro ao buscar usuário")
        }
    }
}