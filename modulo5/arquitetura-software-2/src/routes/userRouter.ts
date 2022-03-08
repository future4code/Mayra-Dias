import express from 'express'
import { app } from '../../src/controller/app'
import UserBusiness from '../business/UserBusiness'
import UserController from '../controller/UserController'
import UserData from '../data/UserData'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const userRouter = express.Router()
const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)


app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)