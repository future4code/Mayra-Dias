import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroPage from '../pages/CadastroPage/CadastroPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import Header from '../components/Header/Header'

const Router = () => {
return(
    
<BrowserRouter>
<Header/>
  <Switch>
       <Route exact path="/login">
            <LoginPage/>
        </Route>
        <Route exact path="/cadastro">
            <CadastroPage/>
        </Route>
        <Route exact path="/pagina-feed/:id">
            <FeedPage/>
        </Route>
        <Route exact path="/pagina-post">
            <PostPage/>
        </Route>
        <Route>
            <ErrorPage/>
        </Route>
    </Switch>
 </BrowserRouter>

)}

export default Router;