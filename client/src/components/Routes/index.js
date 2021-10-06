import React, {useState} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home';
import Model from '../../pages/Model';
import {ClientsList} from "../../pages/ClientsList"
import {ClientCreate} from "../../pages/ClientCreate"
import { ClientUpdate } from '../../pages/ClientUpdate';
import Clients from '../../pages/Clients';
import ClientsDetails from '../../pages/ClientsDetails';
import PageNotFound from '../../pages/PageNotFound';
import TestApp from '../../pages/TestApp';

import {QueryClientDetails} from "../Query/QueryClientDetails";
import {QueryClients} from "../Query/QueryClients";

import Navbar from '../Navbar';



const Index = () => {
  const [clientId, setClientId] = useState()
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/payment" exact component={Clients}></Route>
        <Route exact path="/clients" render={(props) => <Clients {...props} model={'clients'} label={'Patients'}/>} />
        <Route exact path="/clients/:id" render={(props) => <ClientsDetails {...props} model={'clients'}/>} /> 
        <Route exact path="/clients-list">
          <ClientsList/>
        </Route>
        <Route exact path="/clients-create">
          <ClientCreate/>
        </Route>
        <Route exact path="/clients-update/:id">
          <ClientUpdate/>
        </Route>
        <Route exact path="/query-clients">
          <QueryClients setClientId={setClientId} />
          <QueryClientDetails id={clientId} />
        </Route>
        <Route exact path="/payments" render={(props) => <Model {...props} model={'payments'} label={'Paiements'} />} />
        <Route exact path="/sessions" render={(props) => <Model {...props} model={'sessions'} label={'Rendez-vous'}/>} />        
        <Route exact path="/test" render={(props) => <TestApp {...props} />} />
        <Route component={PageNotFound}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  )
}

export default Index;