import { compare } from "../../services/HashManager"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/Authenticator"
import { user } from "../../model/User"

export const loginBusiness = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}