import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Login extends React.Component{
    render() {
        return (
        <div className="loginDiv">
            <form method="get" id="loginForm" className="loginform">
                <table>
                    <tr>
                        <td>User Name :</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td><input type="password"/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Login"/></td>
                    </tr>
                </table>
            </form>
            <div>
                <b className={"Displayed1"}>Not yet a User? </b>
                <link to={"/app.js"} activeStyle={"blue"}>t</link>
            </div>
        </div>
        );
    }
}
