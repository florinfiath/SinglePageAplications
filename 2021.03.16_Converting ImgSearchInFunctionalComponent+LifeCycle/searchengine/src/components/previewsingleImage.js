import React from "react";


const PreviewSingleImage = (props) => {
  //  let componentWillUnmount = () => {
  //       console.log('preview component is going to be deleted from the DOM ')
  //   }  
    
    return (
      <div className="container">
        <div className="row">
        <img src={props.photoUrl} alt=""/>
        </div>
      </div>
    );
  
}

export default PreviewSingleImage;
