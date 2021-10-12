import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'
import Clients from '../pages/Clients'
import Payments from '../pages/Payments'
import Sessions from '../pages/Sessions'
import Navbar from './Navbar';

const Routes = () => {
    return (
        <>
            <Navbar/>
      <Container maxWidth="lg">
          <br/>
        <Box sx={{ flexGrow: 1 }}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route exact path="/clients">
                        <Clients></Clients>
                    </Route>
                    <Route exact path="/rendez-vous">
                        <Sessions></Sessions>
                    </Route>
                    <Route exact path="/paiments">
                        <Payments></Payments>
                    </Route>
                    <Route component={PageNotFound}></Route>
                    <Redirect to="/"></Redirect>
                </Switch>
            </Router>
            </Box>
      </Container>
        </>
  )
}

export default Routes;