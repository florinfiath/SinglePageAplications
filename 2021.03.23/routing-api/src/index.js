import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Users from './components/users';
import UserDetails from './components/userDetails';


const App = () => {

    return (
        <Router>

      <Link to="/users">Users</Link>


      <Switch>
         <Route path="/users"><Users/></Route>
         <Route path='/users/:id'><UserDetails/></Route>
       </Switch>
    </Router>
        
    )
};

ReactDOM.render(<App/>,document.getElementById('root'))