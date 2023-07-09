import React , {useState} from 'react'
import './NavBar.css';

function NavBar() {
    return (
        <>
          <nav className="navbar">
            <div className="navbar-logo">
              <h1>Gavin Lim</h1>
              </div>
            <ul className="navbar-menu">
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </>
      );
    }

export default NavBar