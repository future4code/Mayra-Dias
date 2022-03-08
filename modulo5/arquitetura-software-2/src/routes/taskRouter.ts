import express from 'express'
import { app } from '../../src/controller/app'
import UserBusiness from '../business/UserBusiness'
import UserController from '../controller/UserController'
import UserData from '../data/UserData'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const taskRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

app.put('/task', userController.createTask)
app.get('/task/:id', userController.getTaskById)