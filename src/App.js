import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
import Products from './Pages/ProductsPage';
import Contact from './Pages/ContactPage';
import SingleProduct from './Pages/SingleProductPage';
import Cart from './Pages/CartPage';
import Default from './Pages/Default';

import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SideCart from './Components/SideCart';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <SideCart />
      <Sidebar />

      {/* navbar, sidebar, cart, footer */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
