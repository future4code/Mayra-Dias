import { hash } from "../../services/HashManager";
import { insertUser } from "../../data/user/insertUser";
import { userData } from "../../model/User";
import { generateToken } from "../../services/Authenticator";
import { generateId } from "../../services/IdGenerator";

export const signupBusiness = async (
   userData: userData
):Promise<string> => {
   if (
      !userData.name ||
      !userData.nickname ||
      !userData.email ||
      !userData.password ||
      !userData.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const cypherPassword = await hash(userData.password);

   const newUser = {
      ...userData,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: userData.role
   })

   return token

}
