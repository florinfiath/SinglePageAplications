import React from 'react';
import Cart from '../components/shop/cart';
import Checkout from "../components/shop/checkout";
import Products from "../components/shop/products";
import ProductDetails from "../components/shop/product-details";
import Login from "../components/shop/login";
import {
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";


const Shop = () => {

 let {path} = useRouteMatch();
 console.log(path);

    return (
        <Switch>
          <Route exact path={path}>

          </Route>
          <Route path={`${path}/products`}>
            <Products />
          </Route>
          <Route path={`${path}/product-details`}>
            <ProductDetails />
          </Route>
          <Route path={`${path}/checkout`}>
            <Checkout />
          </Route>
          <Route path={`${path}/cart`}>
            <Cart />
          </Route>
          <Route path={`${path}/login`}>
            <Login />
          </Route>
        </Switch>
    );
};

export default Shop;