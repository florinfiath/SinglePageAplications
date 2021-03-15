import React from "react";

class Gallery extends React.Component {

 previewBtnClick = (index) => {
     console.log(index)
 }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.ImageStorage.map((element, idx) =>(
            <div
              key={element.id}
              className="card p-3"
              style={{width:"18rem"}}>
              <img className="card-img-top" height="200" src={element.previewURL} alt='{element.tags}'/>
              <div className="card-body">
                <h5 className="card-title">${element.user}</h5>
                <p className="card-text" style={{minheight:"100px"}}>
                  {element.tags}
                </p>
                <butoon onClick={() => {this.previewBtnClick(idx)}} className="btn btn-primary">Preview</butoon>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
