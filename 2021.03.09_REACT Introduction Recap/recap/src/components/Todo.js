import React from 'react';


class Todo extends React.Component {
     // add the state inside a class  , build  the constructor 
    constructor(props) {
        super(props);
        this.state = {
            bgColor:"aqua",
            textColor:"none"
            
        }
    }
     
     
    changeColorBtnClick= () => {
        // alert("Hi")
        // can not change the state directly instead we need to use setState() method
        // this.state.bgColor = "red"

        this.setState({
            bgColor:'red',
            textColor:"blue"
        });
    }


    render(){
      //props destructuring
      const { todoList } = this.props;
      console.log(todoList);


      // for loop way
      // let listElement = [];

      // for(let i = 0; i < this.props.todoList.length; i++) {
      //      const item =
      //        <div>
      //          <span>{this.props.todoList[i].todo}</span>
      //          <span>{this.props.todoList[i].done ? "done" : "not yet"}</span>
      //        </div>;
      //        listElement.push(item)

      // }


      // map way to render items

     let listElement = this.props.todoList.map((element, idx) => 
          
             <div key={idx}>
               <span>{element.todo}</span>
               <span>{element.done ? "done" : "not yet"}</span>
          </div>
     )

      return (
        <div style={{backgroundColor:this.state.bgColor,color: this.state.textColor}}>
          {listElement}
          {/* <button onClick={()=>{alert('HI')}}>Change color</button> */}
          <button
            // add event for any react element should be done without "()"
            onClick={this.changeColorBtnClick}
          >
            Change color
          </button>
        </div>
      );
      }
}

export default Todo;