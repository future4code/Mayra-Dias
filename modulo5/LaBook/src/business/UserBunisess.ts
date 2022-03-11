import { SignupInput } from "../controller/UserController";
import UserData from "../data/userData";

export default class UserBusiness {

    constructor(
        private userData: UserData,
    ) { }

    signup = async (input: SignupInput) => {
        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error("Campos inválidos")
        }
        const userRegistered = await this.userData.findByEmail(email)
        if (userRegistered) {
            throw new Error("Email já cadastrado")
        }


    }
}