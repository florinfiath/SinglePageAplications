import React, {useState} from  'react'



const AddToDo = () => {
      // hook useState
    // 1 - create initial state object
    const initialState = {
        todoValue: ''
    };

    // 2 - state array destructuring using useState

    const [state, setState] = useState(initialState);

    
    return (
    <>
    <input
    value={state.todoValue}
    onChange={(e) => {setState({todoValue: e.target.value})}}
    type="text" 
    placeholder="enter To Do"/>
    <button>Add</button>

    </>

  )
}

export default AddToDo;