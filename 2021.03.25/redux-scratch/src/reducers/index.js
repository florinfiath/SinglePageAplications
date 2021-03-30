import {combineReducers} from 'redux';


const todosList = [];

const inprogressList = [];

const doneList = [];


const todosReducer = (todos = todosList, action) => {
    if(action.type === 'ADD_TODO') {
        todosList.push(action.payload);
        return [...todosList]
    }
    if(action.type ==='DELETE_TODO') {
        todosList.splice(action.payload,1);
        return [...todosList];
    }
    if (action.type === "ADD_IN_PROGRESS") {
      todosList.splice(action.payload.idx, 1);
      return [...todosList];
    }
    if (action.type === "BACK_PROGRESS_TODOS") {
      todosList.push(action.payload.elm);
      return [...todosList];
    }


    return todos;

}

const inprogressReducer = (inprogress = inprogressList,action) => {
    if(action.type === 'ADD_IN_PROGRESS') {
        inprogressList.push(action.payload.todo);
        return [...inprogressList]
    }
     if (action.type === "DELETE_IN_PROGRESS") {
       inprogressList.splice(action.payload, 1);
       return [...inprogressList];
     }
    
    if (action.type === "ADD_DONE") {
      inprogressList.splice(action.payload.idx, 1);
      return [...inprogressList];
    }
    if (action.type === "BACK_PROGRESS_TODOS") {
      inprogressList.splice(action.payload.idx, 1);
      return [...inprogressList];
    }
     if (action.type === "BACK_DONE_IN_PROGRESS") {
       inprogressList.push(action.payload.elm);
       return [...inprogressList];
     }


    return inprogress
}


const doneReducer = (done = doneList, action) => {
  if (action.type === "ADD_DONE") {
    doneList.push(action.payload.inprogress)
    return [...doneList];
  }
  if (action.type === "DELETE_DONE") {
    doneList.splice(action.payload, 1);
    return [...doneList];
  }
  if (action.type === "BACK_DONE_IN_PROGRESS") {
    doneList.splice(action.payload.idx, 1);
    return [...doneList];
  }
  
  return done;
};



export default combineReducers({
    todos: todosReducer,
    inprogressList: inprogressReducer,
    doneList: doneReducer
})