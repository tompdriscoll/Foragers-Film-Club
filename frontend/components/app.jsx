import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavContainer from './nav/nav_container'
import Splash from './splash'
import HomeContainer from './home/home_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CalendarContainer from './calendar/calendar_container'

const App = () => (
  <div id="app">
    <NavContainer/>
    <Switch>
      <AuthRoute path='/' exact component={Splash}/>
      <ProtectedRoute path='/h' component={HomeContainer}/>
      <ProtectedRoute path='/calendar' component={CalendarContainer}/>
    </Switch>
  </div>
    
 
);

export default App;