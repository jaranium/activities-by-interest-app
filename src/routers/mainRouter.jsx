import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from '.././components/Header.jsx'
import NotFoundPage from '.././components/NotFoundPage.jsx'
import SignUp from '.././containers/SignUp.jsx';
import Survey from '.././components/Survey.jsx'
import Home from '.././components/Home.jsx'


const Router = () => (
  <BrowserRouter >
    <div>
      <Header />
      <Switch>
        <Route path="/" component={SignUp} ></Route>
        <Route path="/signup" component={SignUp} ></Route>
        <Route path="/survey" component={Survey} ></Route>
        <Route component={NotFoundPage} ></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;