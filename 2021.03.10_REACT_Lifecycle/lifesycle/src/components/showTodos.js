import React from "react";

class ShowTodos extends React.Component {
    

    doneBtnClick = (index) => {
    //    console.log(index)
      this.props.deleteItem(index);
      
    }
    
  render() {
    return (
      <ul>
        {this.props.todos.map((element, idx) => (
          <li key={idx}>
            {element},
            {
              //Call a method (using event which require a parameter it suppose to be done inside a ARROW function
            }
            <button
              onClick={() => {
                this.doneBtnClick(idx);
              }}
            >
              Done
            </button>
          
          </li>
        ))}
      </ul>
    );
    
  }
}

export default ShowTodos;
