import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

const navStyle = {
    color: 'black'
}

  return (
    <nav>
        <h1>Urban Out-Routers</h1>
        <ul className="nav-links">

        <Link style={navStyle} to='/'>
            <li>Home</li>
        </Link>


        <Link style={navStyle} to='/products'>
            <li>Products</li>
        </Link>

        <Link style={navStyle}  to='/shop'>
            <li>Shop</li>
        </Link>

        <Link style={navStyle}  to='/cart'>
            <li>Cart</li>
        </Link>

        <Link style={navStyle}  to='/checkout'>
            <li>Checkout</li>
        </Link>

        </ul>
    </nav>
  );
}

export default Nav;