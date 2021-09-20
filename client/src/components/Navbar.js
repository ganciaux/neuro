import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <NavLink exact to="/home">
                <span className="visually-hidden">(current)</span>
            </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/clients" className="nav-link">Patients</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/payments" className="nav-link">Paiments</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/sessions" className="nav-link">Rendez-vous</NavLink>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  );
}

export default Navbar;