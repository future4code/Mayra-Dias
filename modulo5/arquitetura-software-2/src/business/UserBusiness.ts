import { SignupInputDTO } from "../controller/UserController";
import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export default class UserBusiness{
    constructor(
        private userData:UserData,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}


    signup = async (input: SignupInputDTO) =>{
        
        const {name, email, password} = input
        if(!email || !name || !password){
            throw new Error("Campos inválidos")
        }

        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error ("Email já cadastrado")
        }

        const id = this.idGenerator.generateId()
        const hashedPassword = await this.hashManager.hash(password)
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        console.log(user)
        await this.userData.insert(user)
        const token = this.authenticator.generateToken({id})
        return token
    }
}