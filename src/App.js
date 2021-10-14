import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Products from './Products.js';
import Shop from './Shop.js';
import Cart from './Cart.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (

    <Router>
        <div className="App">

          <Nav/>

          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/shop" component={Shop}/>   
          <Route path="/cart" component={Cart}/> 
          <Route path="/checkout" component={Checkout}/>   
          </Switch>      
        </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
