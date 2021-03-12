import React from 'react';
import ReactDOM from 'react-dom';
import IngridInformation from './components/IngridInformation';
import SarahInformation from './components/SarahInformation';
import Todo from "./components/Todo";
import './css/main.css';



class App extends React.Component {
    render(){
    
         const todos = [
           {
             todo: "eat",
             done: false,
           },
           {
             todo: "sleep",
             done: false,
           },
           {
             todo: "learn",
             done: "true",
           },
           {
             todo: "code",
             done: "true",
           },
         ];

      return (
        <div>
          <h1 className="pinkcolor">Hello I am Ingrid</h1>
          <h2>About</h2>
          <IngridInformation
            age="I am  6 years old"
            favoriteColor="My favorite color is pink"
          />
          <h2>Daily activities</h2>
          <Todo todoList={todos} />

          <h1 className="greencolor">Hello I am Sarah</h1>
          <SarahInformation
            age="I am 8 years old"
            favoriteColor="My favorite color is green"
          />
          <h2>Daily activities</h2>
          <Todo todoList={todos} />

         
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));