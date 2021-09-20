import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home';
import Model from '../../pages/Model';
import Navbar from '../Navbar';

const index = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/payment" exact component={Model}></Route>
        <Route exact path="/clients" render={(props) => <Model {...props} title={`Patients`} model={'Clients'}/>} /> 
        <Route exact path="/payments" render={(props) => <Model {...props} title={`Paiements`} model={'Payments'}/>} />        
        <Route exact path="/sessions" render={(props) => <Model {...props} title={`Rendez-vous`} model={'Sessions'}/>} />        
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  )
}

export default index;