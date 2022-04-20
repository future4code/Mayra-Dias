import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import VideosPage from './pages/VideosPage/VideosPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/video" component={VideosPage} />
            <Route path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
);

export default Router;