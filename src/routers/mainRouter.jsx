import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from '.././components/Header.jsx'
import NotFoundPage from '.././components/NotFoundPage.jsx'
import SignUp from '.././containers/SignUp.jsx';
import ProfileContainer from '.././containers/ProfileContainer.jsx';
import Survey from '.././components/Survey.jsx'

const Router = () => (
  <BrowserRouter >
    <div>
      <Switch>
        <Route path="/" exact component={SignUp} ></Route>
        <Route path="/signup" exact component={SignUp} ></Route>
        <Route path="/survey" exact component={Survey} ></Route>
        <Route path="/profile" exact component={ProfileContainer} ></Route>
        <Route exact component={NotFoundPage} ></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;