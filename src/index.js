import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
//import Profile from './components/Profile/profile'
ReactDOM.render((
   
   <HashRouter>
      <Route exact path="/login" component={Login}/>
      <Route path="/signup" component={Signup} /> 
      
   </HashRouter >
), document.getElementById( 'root' ) )
//serviceWorker.unregister();

