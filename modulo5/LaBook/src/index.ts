import app from '../src/app'
import UserBusiness from './business/UserBunisess';
import UserController from "./controller/UserController";
import UserData from "./data/userData";

const userController = new UserController(
   new UserBusiness(
      new UserData()
   )
)

app.post('/users/signup', userController.signup)
app.post('/users/login')
app.post('/posts/create')
app.get('/posts/:id')
   
