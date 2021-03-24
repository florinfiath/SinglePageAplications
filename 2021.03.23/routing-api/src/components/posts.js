import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts, getComments } from '../api';


const Posts = () => {

    const [state, setState] = useState({posts: []})

    const {id} = useParams();
    useEffect(() => {
        getPosts(id).then(data => {
            setState({posts: data})
        })

    }, [])

    const getPostComments = (postId) => {

       getComments(postId).then(data => {
         const newPosts = state.posts.map(post => {
             if(post.id ===postId){
                 post.comments = data
             }
             return post;
         })
          setState({ posts: newPosts });
       })
      
    }

    return (
      <ul>
        {state.posts.map((post) => 
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button
              onClick={() => {
                getPostComments(post.id);
              }}
            >
              Comments
            </button>
            <ul>
              <li>
                {/*render comments here*/}
                {post.comments ? (
                  <ul>
                    {post.comments.map((comment) => (
                      <li key={comment.id}>
                        <h4>{comment.email}</h4>
                        <h4>{comment.name}</h4>
                        <p4>{comment.body}</p4>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            </ul>
          </li>
        )}
      </ul>
    );
};

export default Posts;