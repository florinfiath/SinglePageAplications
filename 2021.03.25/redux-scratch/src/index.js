import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers'

import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos'


const App = () => {

    /* const initState = {
     todoList: [],
   };

   const addToDo = (todo) => {
     setState({
       todoList: [...state.todoList, todo],
     });
   };

   const [state, setState] = useState(initState);*/

   return (
     <>
       {/* <h1>ToDo List</h1>
       <AddToDo save={addToDo} />
       <ShowToDos list={state.todoList} /> */}

       <AddToDo/>
       <ShowToDos/>
     </>
   );
};

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  ,document.getElementById("root")
);