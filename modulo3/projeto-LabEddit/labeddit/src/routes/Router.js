import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CadastroPage from '../pages/CadastroPage/CadastroPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'

const Router = ({setBotaoDaBarra}) => {
return(
 
  <Switch>
       <Route exact path={"/login"}>
            <LoginPage setBotaoDaBarra={setBotaoDaBarra}/>
        </Route>
        <Route exact path={"/cadastro"}>
            <CadastroPage setBotaoDaBarra={setBotaoDaBarra}/>
        </Route>
        <Route exact path={"/feed"}>
            <FeedPage/>
        </Route>
        <Route exact path={"/pagina/:postId"}>
            <PostPage/>
        </Route>
        <Route>
            <ErrorPage/>
        </Route>
    </Switch>

)}

export default Router;