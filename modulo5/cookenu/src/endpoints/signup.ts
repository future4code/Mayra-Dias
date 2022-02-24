import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { Id } from "../services/Id";

export async function signup(req: Request, res:Response){
    try{
        const {name, email, password} = req.body
     if(!name || !email || !password){
         res.status(422).send("Insira corretamente")
     }
     
      const userDatabase = new UserDatabase()
      const user = userDatabase.findUser(email)

      if(user){
          res.status(409).send("Esse enail já está cadastrado!")
      }
      const id = new Id();
      const idGenerator = id.generate()

      const hashManager = new HashManager()
      const hashPassword = await hashManager.hash(password);

      const newUser = new User(idGenerator, name, email, hashPassword)
      await userDatabase.createUser(newUser)

      const authenticator = new Authenticator()
      

      res.status(200).send("Usuário criado!")
    }catch(error){
        res.status(400).send(error.message)
    }
}
    
