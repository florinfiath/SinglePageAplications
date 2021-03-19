import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader'
import PageMain from './components/pageMain';
import PageFooter from './components/pageFooter';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Blog from "./pages/blog";
import Page404 from "./pages/404";
import Contact from './pages/contact'



const App = () => {
    return (
      <>
        <Router>
          <PageHeader />
          <PageMain/>
          <PageFooter/>

          <Switch>
              <Route exact path="/"><Home/></Route>
              <Route path="/shop"><Shop/></Route>
              <Route path="/blog"><Blog/></Route>
              <Route path="/404"><Page404/></Route>
              <Route path="/contact"><Contact/></Route>

          </Switch>

          
        </Router>
        
      </>
    );
};
ReactDOM.render(<App/>,document.getElementById('root'))


