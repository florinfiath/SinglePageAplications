import React from 'react';
import ReactDOM from 'react-dom';
import PageFooter from './components/pageFooter';
import PageHeader from './components/pageHeader';
import {
Switch, 
BrowserRouter as Router,
Route} from "react-router-dom";
import Home from "./pages/homePage";
import Shop from "./pages/shop";
import Blog from "./pages/blogPage";
import PageError from './pages/PageError';
import Contact from "./pages/contact";
import ProductsDetails from './pages/productDetails';


const App = () => {
         // if we want to fetch the data :
         //React.useEffect(() => {
            //here we can fetch the data 
          //}, [])
   const products = [
     {
       id: 1089772,
       title: "Anne Klein Sleeveless Colorblock Scuba",
       price: 59,
       imgUrl: "images/home/product1.jpg",
     },
     {
       id: 123452,
       title: "title2",
       price: 40,
       imgUrl: "images/home/product2.jpg",
     },
     {
       id: 123453,
       title: "title3",
       price: 50,
       imgUrl: "images/home/product3.jpg",
     },
     {
       id: 123454,
       title: "title4",
       price: 60,
       imgUrl: "images/home/product4.jpg",
     },
     {
       id: 123455,
       title: "title5",
       price: 80,
       imgUrl: "images/home/product5.jpg",
     },
     {
       id: 123456,
       title: "title6",
       price: 70,
       imgUrl: "images/home/product6.jpg",
     },
   ]; 
    return (
      <Router>
        <PageHeader/>
        <Switch>
          <Route exact path='/'>
            <Home products={products} />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path="/blogPage">
            <Blog/>
          </Route>
          <Route path="/PageError">
            <PageError />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path='/productDetails/:id'>
            <ProductsDetails products={products}/>
          </Route>
        </Switch>
        <PageFooter />
      </Router>
    );
};
ReactDOM.render(<App/>,document.getElementById('root'))


