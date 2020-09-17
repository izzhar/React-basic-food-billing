import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Department from './components/Department/DepSec'
import App from './App'
import Login from './Login';





export default class Homepage  extends Component {
 state = {}
 render() {
  return(
   <div>
     <Router>
           <Route exact path='/' component={Login}/>
           <Route exact path='/xyz' component={Department}/>
           <Route  path='/food' component={App}/>
           </Router>
   </div>
    )
   }
 }


