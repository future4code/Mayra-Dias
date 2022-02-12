import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import criarUsusario from './criarUsuario'


dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())

app.post('/users', criarUsusario) 


app.listen(3003, () => {
    console.log("Server is ruuning at port", process.env.Port || 3003 )
})

