import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <ul style={{
            display: 'flex',
            listStyleType: 'none',
            width: '40%',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <li>
                <h1>
                    <NavLink to="" className="link" style={{color: 'black', textDecoration: 'none'}}>
                        Shopping
                    </NavLink>
                </h1>
            </li>
            <li>
                <h1>
                    <NavLink to="/about" className="link" style={{color: 'black', textDecoration: 'none'}}>
                        Products
                    </NavLink>
                </h1>
            </li>
        </ul>
    );
}

export default NavBar;