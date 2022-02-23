// import { User } from "../entities/User";
// import { BaseDatabase } from "./BaseDatabase";

// export class UserDatabase extends BaseDatabase{
//     public async findUser(email:string): User{
//         try{
//             const user = await BaseDatabase.connection("user")
//             .select('*')
//             .where({email}); const user:any[]

//         return User.toUseMode(user[0]);

//         }cath(error){
//             throw new Error(error.sqlMessage || error.message)

//         }
//     } 

// }