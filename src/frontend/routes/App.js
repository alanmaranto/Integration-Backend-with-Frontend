import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Player from '../containers/Player';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFount';

const App = (props) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={props.isLogged ? Home : Login} />
        <Route exact path="/player/:id" component={props.isLogged ? Player : Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFount} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
