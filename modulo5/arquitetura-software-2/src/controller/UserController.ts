import {Request, Response} from 'express'
import UserBusiness from '../business/UserBusiness'

export type SignupInputDTO = {
    name: string
    email: string
    password: string
}

export default class UserController{
    constructor(
        private userBusiness: UserBusiness
    ){}


    signup = async (req: Request, res:Response) =>{
        const {name, email, password} = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try{
            const token = await this.userBusiness.signup(input)

            res.status(200).send({message: "Usuário cadastrado com sucesso", token})
        }catch(error:any){
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }

    login = async (req: Request, res:Response) =>{
        const {name, email, password} = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try{
            const token = await this.userBusiness.signup(input)

            res.status(200).send({message: "Login feito com sucesso", token})
        }catch(error:any){
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no login")
        }
    }
    createTask = async (req: Request, res:Response) =>{
        const {name, email, password} = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try{
            const token = await this.userBusiness.signup(input)

            res.status(200).send({message: "Tarefa feito com sucesso", token})
        }catch(error:any){
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no login")
        }
}
    getTaskById = async (req: Request, res:Response) =>{
        const {name, email, password} = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try{
            const token = await this.userBusiness.signup(input)

            res.status(200).send({message: "Pegar tarefa", token})
        }catch(error:any){
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no login")
        }
    }
}