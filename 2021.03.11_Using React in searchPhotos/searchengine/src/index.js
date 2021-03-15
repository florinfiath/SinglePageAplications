import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import SearchBar from './components/searchBar';
import PreviewSingleImage from './components/previewsingleImage';



class App extends React.Component {
  state = {
    ImageStorage:[],
    choosenImageIndex: null
  };

  saveImages = (images) => {
    this.setState({ImageStorage: images, choosenImageIndex: null})
  };

  previewImage = (idx) => {
   this.setState({choosenImageIndex: idx})
  };

  render() {
    return (
    <>
        <SearchBar save={this.saveImages} />


        {this.state.ImageStorage.length && this.state.choosenImageIndex !== null ?
        <PreviewSingleImage photoUrl={this.state.ImageStorage[this.state.choosenImageIndex].largeImageURL}/> : null}


        <Gallery preview ={this.previewImage} ImageStorage={this.state.ImageStorage}/>
    </>
    )
    };
  }

ReactDOM.render(<App/>,document.getElementById('root'))