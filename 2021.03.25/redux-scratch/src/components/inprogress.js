import React from 'react';
import {connect} from 'react-redux';
import {addDone,deleteInProgress,backProgressToDos} from '../actions'

const InProgress = (props) => {

    const doneBtnClick = (elm, idx) => {
        props.addDone(elm, idx);
      
    }
     const deleteBtnClick = (idx) => {
       props.delete(idx);
     }

     const backToDosBtnClick = (idx, elm) => {
        props.backProgressToDos(idx, elm);

     }

    return (
      <div>
        <h2>In progress</h2>
        <ul>
          {props.progressList.map((elm, idx) => (
            <li key={idx}>
              {elm}
              <button
                onClick={() => {
                  deleteBtnClick(idx);
                }}
              >
                Delete
              </button>
              <button onClick={() => doneBtnClick(elm, idx)}>Done</button>
              <button onClick={() => backToDosBtnClick(idx, elm)}>Back to ToDos</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
        progressList: state.inprogressList
    }
}

export default connect(mapStateToProps,{ addDone,delete : deleteInProgress, backProgressToDos })(InProgress);