import React, {useState} from  'react'





const AddToDo = (props) => {
      // hook useState
    // 1 - create initial state object
    const initialState = {
        todoValue: ''
    };

    // 2 - state array destructuring using useState

    const [state, setState] = useState(initialState);

    const addBtnClick = () => {
      if(state.todoValue.trim()){
       props.add(state.todoValue);
       }setState({todoValue: ''});
  }
    
    return (
    <>
    <input
    value={state.todoValue}
    onChange={(e) => {setState({todoValue: e.target.value})}}
    type="text" 
    placeholder="enter To Do"/>
    <button 
    onClick={addBtnClick}
    >Add</button>

    </>

  )
}

export default AddToDo;