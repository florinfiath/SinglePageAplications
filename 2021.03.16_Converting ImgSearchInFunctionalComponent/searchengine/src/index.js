import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import SearchBar from './components/searchBar';
import PreviewSingleImage from './components/previewsingleImage';



const  App = () => {

  const initState = {
    ImageStorage:[],
    choosenImageIndex: null
  };

  const [state, setState] = useState(initState);

 const saveImages = (images) => {
    setState({ImageStorage: images, choosenImageIndex: null})
  };

 const  previewImage = (idx) => {
   //class component setState will change only the property that is written on the curly brackets
   // on functional component setState will override the complete old state
   setState({...state, choosenImageIndex: idx})
  };

  
    return (
    <>
        <SearchBar save={saveImages} />


        {state.ImageStorage.length && state.choosenImageIndex !== null ?
        <PreviewSingleImage photoUrl={state.ImageStorage[state.choosenImageIndex].largeImageURL}/> : null}


        <Gallery preview ={previewImage} ImageStorage={state.ImageStorage}/>
    </>
    )
    
  }

ReactDOM.render(<App/>,document.getElementById('root'))