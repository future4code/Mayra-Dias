import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
 public async createUser(user:User): Promise<void>{
     try{
       await BaseDatabase.connection('user').insert({
           id: user.getId(),
           name: user.getName(),
           email: user.getEmail(),
           password: user.getPassword(),
           role: user.getRole()
       })
     }catch(error){
       throw new Error(error.sqlMessage || error.message)
     }
 }

    public async findUser(email:string):Promise<User>{
        try{
            const user = await BaseDatabase.connection("user")
            .select('*')
            .where({email});

        return user[0] && User.toUseMode(user[0]);
            }catch(error){
            throw new Error(error.sqlMessage || error.message)

        }
    } 

}