import React from 'react';


class AddTodo extends React.Component {
    
    state = {
     
       todoValue:'',
    }
    AddTodoClick = () => {
        // alert(this.props.someProp)
        this.props.addtodo(this.state.todoValue);
        this.setState({todoValue: ''});
    }



    render(){
        
        return (
          //convert input to controlled input
          <>
            <input
              onChange={(e) => {
                this.setState({ todoValue: e.target.value });
              }}
              value={this.state.todoValue}
            />
            <button onClick={this.AddTodoClick}>Add To Do</button>
          </>
        );
    }

};

export default AddTodo;