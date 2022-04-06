import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import DetailsPage from '../pages/DetailPage/DetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'

const Router = () => {
    return(
    <BrowserRouter>
    <Header/>
        <Switch>
          <Route exact path="/">
             <HomePage/>
          </Route>
          <Route exact path="/details/:id">
             <DetailsPage/>
          </Route>
          <Route>
             <ErrorPage exact path="/error"/>
          </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router;