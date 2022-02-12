import { Request, Response } from "express";
import inserirUsuario from "./inserirUsuario";

export default async function criarUsusario(
    req: Request,
    res: Response
){
    try{
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.password
){
    res
    .status(200)
    .send("Preencha os campos")
}

const id: string = Date.now() + Math.random().toString()

await inserirUsuario(
    id,
    req.body.name, 
    req.body.email,
    req.body.password
)
   res.status(200)
       .send("Usuário criado")
       
    }catch(error){
        res.status(400).send({
           message: error
        })
    }
}