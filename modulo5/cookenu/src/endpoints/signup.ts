import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User} from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { Id } from "../services/Id";

export async function signup(req: Request, res:Response){
    try{
        const {name, email, password, role} = req.body
     if(!name || !email || !password || !role){
         res.status(422).send("Insira corretamente")
     }
     
      const userDatabase = new UserDatabase()
      const user = await userDatabase.findUser(email)

      if(user){
          res.status(409).send("Esse enail já está cadastrado!")
      }
      const idGenerator = new Id();
      const id = idGenerator.generate()

      const hashManager = new HashManager()
      const hashPassword = await hashManager.hash(password);

      const newUser = new User(id, name, email, hashPassword, role)
      await userDatabase.createUser(newUser)

      const authenticator = new Authenticator()
      const token = authenticator.generate({id, role})

      res.status(200).send({message: "Usuário criado!", token})
    }catch(error){
        res.status(400).send(error.message)
    }
}
    
