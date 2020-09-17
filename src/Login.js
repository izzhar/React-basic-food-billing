import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './login.css'



class Login  extends Component {
    constructor(props){
        super(props);
        this.state={
            flag:false
        }
    }
    Login=()=>{
        if(this.refs.pin.value==123){
           this.setState({flag:true})
        }
     }
 render() {
     if(this.state.flag){
         return <Redirect to='/xyz'/>
     }
  return(
   <div className="div">
       <h1>LOGIN HERE</h1>
       <form className="form">  
           <input className="input" type='password'
           placeholder='Enter Pin'
           ref='pin'/> <br></br> 
           <button onClick={this.Login}>submit</button>
       </form>
   </div>
    )
   }
 }



export default Login;