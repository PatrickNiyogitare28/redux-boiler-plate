import React from 'react';
import "./styles/output.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import DashboardPage from './views/DashboardPage'
import PostsPage from './views/PostsPage'
import SinglePostPage from './views/SinglePostPage'
import Onboard from './views/Onboard';

const App = () => {
  return (
    <Router>
      <Switch>
       <Route exact path="/" component={Onboard} />
      </Switch>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/:id" component={SinglePostPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
   
  )
}

export default App
