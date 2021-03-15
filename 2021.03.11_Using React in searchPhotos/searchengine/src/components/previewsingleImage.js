import React from "react";

class PreviewSingleImage extends React.Component {
    componentWillUnmount = () => {
        console.log('preview component is going to be deleted from the DOM ')
    }  
    render() {
    return (
      <div className="container">
        <div className="row">
        <img src={this.props.photoUrl} alt=""/>
        </div>
      </div>
    );
  }
}

export default PreviewSingleImage;
