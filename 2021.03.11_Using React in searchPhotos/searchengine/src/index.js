import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import SearchBar from './components/searchBar';
import SingleImage from './components/singleImage';
import singleImage from './components/singleImage';


class App extends React.Component {
  state = {
    ImageStorage:[]
  };

  saveImages = (images) => {
    this.setState({ImageStorage: images})
  }

  render() {
    return (
      <>
        <SearchBar save={this.saveImages} />
        {/* <SingleImage showImage={this.}/> */}
        <Gallery ImageStorage={this.state.ImageStorage}/>
      </>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))