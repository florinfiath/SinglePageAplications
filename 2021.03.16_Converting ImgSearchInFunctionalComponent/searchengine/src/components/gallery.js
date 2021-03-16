import React from "react";

const Gallery = (props) => {

 let previewBtnClick = (index) => {
     console.log(index);
     props.preview(index);
     
 }

    return (
      <div className="container">
        <div className="row">
          {props.ImageStorage.map((element, idx) =>(
            <div
              key={element.id}
              className="card p-3"
              style={{width:"18rem"}}>
              <img className="card-img-top" height="200" src={element.previewURL} alt={element.tags}/>
              <div className="card-body">
                <h5 className="card-title">${element.user}</h5>
                <p className="card-text" style={{minheight:"100px"}}>
                  {element.tags}
                </p>
                <button onClick={() => {previewBtnClick(idx)}} className="btn btn-primary">Preview</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
}

export default Gallery;
