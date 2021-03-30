import React from 'react';
import { connect } from 'react-redux';
import { deleteDone,backDoneInProgress } from "../actions";

const Done = (props) => {

    const deleteBtnClick = (idx) => {
      props.delete(idx);
    };
    const backDoneInProgressBtnClick = (idx, elm) => {
        props.backDoneInProgress(idx, elm)
    }

    return (
      <div>
        <h2>Done</h2>
        <ul>
          {props.donelist.map((elm, idx) => (
            <li key={idx}>
              {elm}
              <button
                onClick={() => {
                  deleteBtnClick(idx);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  backDoneInProgressBtnClick(idx, elm);
                }}
              >
                Back Done In Progress
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        donelist : state.doneList
    }
}

export default connect(mapStateToProps, { delete: deleteDone, backDoneInProgress })(
  Done
);