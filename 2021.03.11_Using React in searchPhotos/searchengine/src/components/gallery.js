import React from "react";

class Gallery extends React.Component {

  showSingleImage = () => {
      

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.ImageStorage.map((element) =>(
            <div
              key={element.id}
              className="card p-3"
              style={{width:"18rem"}}>
              <img className="card-img-top" height="200" src={element.previewURL} alt=''/>
              <div className="card-body">
                <h5 className="card-title">${element.user}</h5>
                <p className="card-text" style={{minheight:"100px"}}>
                  {element.tags}
                </p>
                <a onClick={this.showSingleImage} href={element.largeImageURL} className="btn btn-primary">
                  preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
