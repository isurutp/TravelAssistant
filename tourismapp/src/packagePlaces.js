import React, { Component } from 'react';
//import logo from './logo.svg';
import './registerCSS.css';

class packagePlaces extends Component {
    render() {
        return (
            <div className="App">

                <div className="dd">
                    <h1>Sigiriya</h1></div>

                <p className="para">-------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

                <button className="b1">
                    package1
                    <p className="p1">_________________________</p>
                    <p>package1 content</p>
                </button>

                <button className="b1">
                    package2
                    <p className="p1">_________________________</p>
                    <p>package2 content</p>
                </button>

                <button className="b1">
                    package3
                    <p className="p1">_________________________</p>
                    <p>package3 content</p>
                </button>

                <button className="b1">
                    package4
                    <p className="p1">_________________________</p>
                    <p>package4 content</p>
                </button>
            </div>

        );
    }
}

export default packagePlaces;
