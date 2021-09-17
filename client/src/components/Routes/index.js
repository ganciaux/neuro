import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home';
import Clients from '../../pages/Clients';
import Navbar from '../Navbar';

const index = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/clients" exact component={Clients}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  )
}

export default index;