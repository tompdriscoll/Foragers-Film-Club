import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Nav from './nav'

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app">
    <Switch>
      <Route path='/' component={Nav}/>
    </Switch>
  </div>
    
 
);

export default App;