import cors from "cors";
import { AddressInfo } from "net";
import express, {Request, Response} from "express";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

type user = {                                                   
    id:number,
    name: string,
    nickname: string,           
    email: string
}

let users: user[] = [
{
    id: 1,
	name: "Astro Dev",
	nickname: "astrodev",
	email: "astro@dev.com"

}
]
type task = {
    taskId: Number,
    title: string
    description: string,
    limitDat: string,
    status: string,
    creatorUserId: string,
    creatorUserNickname: string,

}
let tasks: task[] = [
    {
        taskId: 1,
        title: "Criar banco dos alunos",
        description: "Devemos criar o banco dos alunos para o módulo do backend",
        limitDat: "04/05/2020",
        status: "to_do",
        creatorUserId: "001",
        creatorUserNickname: "astrodev"
    }
]

app.get("/user/:id", async(req:Request, res:Response): Promise<void> => {
 let errorCode = 400
 try{
     const id:number = Number(req.params.id)
     if(isNaN(id)){
         errorCode = 422
         throw new Error("Invalid value for id. Please send a Number")
     }
     const user = users.find((user:any) => {
         return user.id === id
     })
     if(!user){
         errorCode = 404
         throw new Error("User not found")
     }
     res.status(200).send({user})
 } 
 catch(error){
     res.status(errorCode).send("Invalid value for id. Please send a Number")
 }
},
 
app.get("/task/:id", async(req:Request, res:Response): Promise<void> => {
    let errorCode = 400
    try{
        const id:number = Number(req.params.id)
        if(isNaN(id)){
            errorCode = 422
            throw new Error("Invalid value for id. Please send a Number")
        }
        const task = tasks.find((task:any) => {
            return task.id === id
        })
        if(!task){
            errorCode = 404
            throw new Error("User not found")
        }
        res.status(200).send({task})
    } 
    catch(error){
        res.status(errorCode).send("Invalid value for id. Please send a Number")
    }
   }),
   

app.post("/user", async(req:Request, res:Response): Promise<void> => {
    try{
    await connection.raw(`
   INSERT INTO user(name, nickname, email)
   VALUES (
       ${Date.now().toString()},
       "${req.body.name}"
       "${req.body.nickname}"
       "${req.body.email}"
   );
   
`) 
    res.status(201).send("User created")
   
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})
)
app.post("/task", async(req:Request, res:Response): Promise<void> => {
    try{
    await connection.raw(`
   INSERT INTO user(name, nickname, email)
   VALUES (
       ${Date.now().toString()},
       "${req.body.title}" 
       "${req.body.description}"
       "${req.body.limitDate}"
       "${req.body.creatorUserId}"

   );
   
`) 
    res.status(201).send("created task")
   
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.put("/user/edit/:id", async(req:Request, res:Response): Promise<void> => {
    try{
    await connection('User')
     .update({
        id:req.body.id,
        name:req.body.name,
        nickname:req.body.nickname,
        email:req.body.email
     })
      .where({id: req.params.id})

        res.status(200).send({message: "updated user"})
   
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

