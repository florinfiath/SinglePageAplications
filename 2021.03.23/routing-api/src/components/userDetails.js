import  React  from 'react';
import {Link, Switch, useParams, useRouteMatch, Route} from 'react-router-dom';
import Posts from './posts';
import Todos from './todos';
import Albums from './albums';


const UserDetails = (props) => {
    const {id} = useParams();
    const foundUser = props.users.find(user => user.id == id);
    const {url,path} = useRouteMatch();
    console.log(url);
    return (
      <>
        {foundUser ? (
          <div>
            <h2>User Information</h2>
            <p>
              <strong>ID:</strong>
              {foundUser.id}
            </p>
            <p>
              <strong>Name:</strong>
              {foundUser.name}
            </p>
            <p>
              <strong>email:</strong>
              {foundUser.email}
            </p>
            <p>
              <strong>phone:</strong>
              {foundUser.phone}
            </p>
            <p>
              <strong>website:</strong>
              {foundUser.website}
            </p>

            <ul>
              <li>
                <Link to={`${url}/posts`}>Posts</Link>
              </li>
              <li>
                <Link to={`${url}/todos`}>Todos</Link>
              </li>
              <li>
                <Link to={`${url}/albums`}>Albums</Link>
              </li>
            </ul>

            <Switch>
              <Route path={`${path}/posts`}>
                <Posts/>
              </Route>
              <Route path={`${path}/todos`}>
                <Todos/>
              </Route>
              <Route path={`${path}/albums`}>
                <Albums/>
              </Route>
            </Switch>
          </div>
        ) : null}
      </>
    );
};

export default UserDetails;