import express, { Request, Response } from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get('/test', (req: Request, res: Response) => {
  const name = req.query.name

   res.send(`Olá, seu nome é ${name}!`)
 })
 app.post('/produtos', (req: Request, res: Response) => {

    const produtosNome = req.body.name
    const userIdToAdd = req.headers.authorization
  
    for (let i = 0; i < produtos.length; i++ ) {
      if (produtos[i].id === userIdToAdd) {
        produtos[i].produto.push({
          id: Date.now().toString(),
          name: produtosNome,
          price: []
        })
      }
    }
  
    res.send({ produtos })
  })
  
     

