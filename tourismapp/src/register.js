import React, { Component } from 'react';
//import logo from './logo.svg';
import './registerCSS.css';

class Register extends Component {
  render() {
    return (
        <div className="App">

       <div className="dd">
           <h1>Register Form</h1></div>



            <div className="Aside">
        <div className="divForm">
            <a href="" className="papa">Already a member? SignIn</a>
        </div>

          <div className="divForm2">
              <input type="text" name="Username" placeholder="Enter Your Email" className="input1"></input></div>
          <div className="divForm2">
              <input type="text" name="Username" placeholder="Enter Your UserName" className="input1"></input></div>
          <div className="divForm2">
              <input type="text" name="Username" placeholder="Enter Your Password" className="input1"></input></div>
          <div className="divForm2">
              <input type="text" name="Username" placeholder="Enter Your NIC" className="input1"></input></div>
          <div className="divForm2">
              <input type="text" name="Username" placeholder="Enter Your Passport Number" className="input1"></input></div>


          <div className="divButton">
              <input type="submit" name="submit" value="Register" className="input2"></input>
          </div></div>
      </div>

    );
  }
}

export default Register;
