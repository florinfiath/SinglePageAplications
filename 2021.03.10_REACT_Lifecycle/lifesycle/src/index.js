import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import AddTodo from './components/addTodo';
import ShowTodos from './components/showTodos';
import getToDos from './api'


class App extends React.Component {
  //!trick to pass the value from child component to parent
  // 1 - create a method on the parent component "mainAddTodo"
  // 2 - pass this method as prop to child 'addtodo'
  // 3 - call the method from a child with a parameter "todo"
  // 4 - the parameter is going to be the value that we want to pass from child to parent

  constructor(props) {
    super(props);
    console.log("this is constructor");
  }

  // ! " componentDidMount" live cycle method from class component -will be called ONCE after render

  componentDidMount() {
    console.log("this is componentDidMount");
    getToDos().then((data) => {
      console.log(data);
      const titles = data.map((element) => element.title);
      this.setState({ todoStorage: titles });
    });
  }
  // !"componentDidUpdate" will be called after render , on each update for the component . Update means change the state or rerender the component

  componentDidUpdate() {
    console.log("this is componentDidUpdate");
  }
  //! "componentWillUnmount" it will be executed directly before deleting the component from the DOM . It is used usually to clean up javascript code from other libraries or to delete the event listers from the body
  componentWillUnmount() {
    console.log("this is componentWillUnmount");
  }

  state = {
    todoStorage: [],
  };

  //method to delete element from the todoStorage
  deleteToDo = (index) => {
    //!1- solution with splice
    // const tempArr = this.state.todoStorage;
    // tempArr.splice(index, 1);
    // //save the array on the state one more time
    // this.setState({ todoStorage: tempArr });

    //!2 - solution using filter

    const tempArr = this.state.todoStorage.filter(
      (element, idx) => index !== idx
    );
    this.setState({ todoStorage: tempArr });
  };

  mainAddTodo = (todo) => {
    // console.log(todo);
    // add a new todo to the storage inside the state of the App:

    this.setState({ todoStorage: [...this.state.todoStorage, todo] });
    // const tempArr = this.state.todoStorage;
    // tempArr.push(todo);
    // this.setState({todoStorage:tempArr});
  };

  render() {
    console.log("this is render");

    // console.log(this.state.todoStorage);
    return (
      <>
        <h1>To do List</h1>
        <AddTodo addtodo={this.mainAddTodo}/>
        <ShowTodos
          deleteItem={this.deleteToDo}
          todos={this.state.todoStorage}
        />
      </>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));