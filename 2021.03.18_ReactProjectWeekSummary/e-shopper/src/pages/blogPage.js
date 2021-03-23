import React from 'react';
import {
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import BlogList from '../components/blog/bloglist';
import BlogSingle from "../components/blog/blogsingle";

const Blog = () => {

     let { path } = useRouteMatch();
     console.log(path);

    return (
    
        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={`${path}/bloglist`}>
            <BlogList/>
          </Route>
          <Route path={`${path}/blogsingle`}>
            <BlogSingle/>
          </Route>
        </Switch>
     
    );
};

export default Blog;