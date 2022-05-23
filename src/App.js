import React from "react";
import {
    Route, NavLink
} from "react-router-dom";
import {Routes} from "react-router";
import Home from './Components/Home';
import Albums from './Components/Albums';
import Dashboard from './Components/Dashboard';
import Details from './Components/Details';
import './App.css';


class App extends React.Component {
  render() {
    return (
        <div className="header">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink  to="/"  className="link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/albums"  className="link">Albums</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dashboard"  className="link">Dashboard</NavLink>
                </li>
            </ul>

            <hr />

            <Routes>
                <Route  path="/" element={<Home  />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/albums/:name" element={ <Details/> } />
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </div>


    );
  }
}

export default App;
