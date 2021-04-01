import React from 'react';
import {connect} from 'react-redux';
import { selectIdxAction } from '../actions'

const SideBar = (props) => {

   const titleClick = (e, idx) => {
       e.preventDefault();
       props.select(idx)
   }

   switch (props.data.status) {
     case "START":
       return <h1>Loading.......</h1>;
     
     case "FAILED":
       return <h1>FAILD......</h1>;
      
     case "SUCCESS":
       return (
         <ul>
           {props.data.data.map((elm, idx) => (
             <li key={idx}>
               <a href="#" onClick={(e) => {titleClick(e, idx)}}>{elm.title}</a>
             </li>
           ))}
         </ul>
       );
       

     default:
         return null
       
   }

};

const mapStateToProps = (state) => {
    return {
        data: state.results
    }
}

export default connect(mapStateToProps, {select: selectIdxAction})(SideBar);