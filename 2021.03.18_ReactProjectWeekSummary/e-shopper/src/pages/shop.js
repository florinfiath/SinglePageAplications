import React from "react";
import { useRouteMatch, Switch, Link, Route } from "react-router-dom";
import Products from "./shop/products";
import ProductsDetails from "./shop/productsDetails";
import Checkout from "./shop/checkout";
import Cart from "./shop/cart";
import Login from "./shop/login";




const Shop = () => {
  let { path } = useRouteMatch();
  console.log(path);

  return (
    <Switch>
      <Route exact path={path}>
        <div>
          <Link to={`${path}/products`}> Products </Link>
          <Link to={`${path}/productsDetails`}> ProductsDetails </Link>
          <Link to={`${path}/checkout`}> Checkout </Link>
          <Link to={`${path}/cart`}> Cart </Link>
          <Link to={`${path}/login`}> Login </Link>
        </div>
      </Route>
      <Route path={path + "/products"}>
        <Products />
      </Route>
      <Route path={path + "/productsDetails"}>
        <ProductsDetails />
      </Route>
      <Route path={path + "/checkout"}>
        <Checkout />
      </Route>
      <Route path={path + "/cart"}>
        <ProductsDetails />
      </Route>
      <Route path={path + "/login"}>
        <ProductsDetails />
      </Route>

    </Switch>
  );
};

export default Shop;
