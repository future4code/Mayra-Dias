import { Request, Response } from "express";
import { Id } from "../services/Id";

export async function signup(req: Request, res:Response){
    try{
        const {name, email, password} = req.body
     if(!name || !email || !password){
         res.status(422).send("Insira corretamente")
     }
     

      const id = new Id();
      const idGenerator = id.generate()



    }catch(error){
        res.status(400).send(error.message)
    }
}
    
