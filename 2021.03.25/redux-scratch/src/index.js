import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers'

import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos'
import InProgress from './components/inprogress';
import Done from './components/done'


const App = () => {

   return (
     <>
       <AddToDo/>
       <ShowToDos/>
       <InProgress/>
       <Done/>
     </>
   );
};

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  ,document.getElementById("root")
);