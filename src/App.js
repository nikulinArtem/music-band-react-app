import React from "react";
import {
    Route, NavLink
} from "react-router-dom";
import {Routes} from "react-router";
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';


import './App.css';


class App extends React.Component {
  render() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink  to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
            </ul>

            <hr />
            <Routes>
                <Route  path="/" element={<Home  />} />

                <Route path="/about" element={<About />}/>

                <Route path="/dashboard" element={<Dashboard />}/>

            </Routes>
        </div>
    );
  }


}

export default App;
