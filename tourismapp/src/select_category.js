import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import App from './App';



function Select_category(){
    return (

        <div>
            <div>
                <ul className="nav_Bar">
                    <li className="nav_item"><div className="nav_text">Adventure</div></li>
                    <li className="nav_item"><div className="nav_text">entertainment</div></li>
                    <li className="nav_item"><div className="nav_text">historical</div></li>
                    <li className="nav_item"><div className="nav_text">religious</div></li>
                    <li className="nav_item"><div className="nav_text">special</div></li>
                </ul>
            </div>
            <div>
                <table>
                    <td><tr>search : </tr><tr><input type="search"/></tr></td>
                </table>
            </div>
            <div>

            </div>
        </div>
    );
}


function category_list(){
    return (
        <td>
        <div>
            {
                this.props.catergory_Items.map((catergory_i) => {
                    return (
                        <category catergory_Items={catergory_i}/>)
                })
            }
        </div>
        </td>
    );}

    function category(props){return (
        <p>this.props.category_items.name</p>
    );}


    let catergory_Items = [{
        id: 1,
        name: "entertainment",
        category:1,
        photo: "",
    },{
        id: 2,
        name: "entertainment1",
        category:1,
        photo: "",
    },{
        id: 3,
        name: "entertainment2",
        category:1,
        photo: "",
    },{
        id: 4,
        name: "entertainment3",
        category:1,
        photo: "",
    },{
        id: 5,
        name: "entertainment4",
        category:1,
        photo: "",
    },{
        id: 6,
        name: "entertainment5",
        category:1,
        photo: "",
    },{
        id: 7,
        name: "Adventure",
        category:2,
        photo: "",
    },{
        id: 8,
        name: "historical",
        category:3,
        photo: "",
    },{
        id: 9,
        name: "religious",
        category:4,
        photo: "",
    }, {
        id: 10,
        name: "special",
        category:5,
        photo: "",
    },{
        id: 11,
        name: "special",
        category:5,
        photo: "",
    }];

ReactDOM.render(Select_category(), document.getElementById('root'));




