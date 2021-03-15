import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AdToDo from './components/addTodo';
import ShowToDos from './components/showtodos'



const App = () => {

    const initState ={
        todoList: [
            'tech FBW43-2',
            'meeting',
            'coding'
        ]
    }

    const addToDo = (todo) => {
       setState({
           todoList: [...state.todoList, todo]
       })
    }

    const [state, setState] = useState(initState);


    return (
        <>
         <h1>Functional Component</h1>
        <AdToDo add={addToDo}/>
        <ShowToDos list={state.todoList}/>
     </>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'))

