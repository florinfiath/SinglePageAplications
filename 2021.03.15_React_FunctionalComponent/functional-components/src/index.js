import React from 'react';
import ReactDOM from 'react-dom';
import AdToDo from './components/addTodo';


const App = () => {

    return (
        <>
         <h1>Functional Component</h1>
        <AdToDo />
     </>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'))

