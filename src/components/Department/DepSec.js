import React from 'react'
import {Link} from 'react-router-dom'
import './DepSec.css'

/**
* @author
* @function Department
**/

const Department = (props) => {
  return(
    <div className="deep">
     <Link to="/food" ><button className="btn1" >  GENERAL FOOD MENU</button></Link>

    <button className="btn2"> TAKE AWAY MENU</button>
    </div>
    
   )

 }

export default Department