import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to="/">
                        <div className="logo">
                            <h3>Test</h3>
                        </div>
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink exact to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/clients">
                            Clients
                        </NavLink>
                    </li>
                </ul>    
            </div>
        </nav>
  );
}

export default Navbar;