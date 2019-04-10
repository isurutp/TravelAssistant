import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
        <header className="divMain">
        <div>
          <h2>Welcome to Sri Lanka</h2>
          <div className="divHead">
            <a href="SelectPackage.js" className="hrefLogin" >Login</a>
          </div>
        </div> <br/>

        <button className="hButton">
          Adventure
          <p className="p1">___________________________</p>
          <p>description</p>
        </button>

          <button className="hButton">
            Entertainment
            <p className="p1">___________________________</p>
            <p>description</p>
          </button>
          <button className="hButton">
            Historical
            <p className="p1">___________________________</p>
            <p>description</p>
          </button>
          <button className="hButton">
            Religious
            <p className="p1">___________________________</p>
            <p>description</p>
          </button>
          <button className="hButton">
            Spiritual
            <p className="p1">___________________________</p>
            <p>description</p>
          </button> <br/><br/><br/><br/>

          <button className="hButton">
            Special Packages
            <p className="p1">______________________________________________________________________________________________________________________________________________________________________</p>
            <p>description</p>
          </button>


    </header>
    );
  }
}

export default App;
