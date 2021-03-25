import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Border from './components/border';


const App = () => {

    //hook useRef to access dom elements in

    const divRef = useRef();

    const btnClick = () => {
    // access dom element using useRef
        console.log(divRef.current);
        divRef.current.style = 'background-color: red; border: 1px solid black';
        divRef.current.childNodes[0].style = 'width:200px';
      
    }
    return (
      <div ref={divRef}>
        <button onClick={btnClick}>ClickMe</button>
     //* component middleware 
        <Border>
          <h1>any element is going to be bordered</h1>
        </Border>
      </div>
    );
};

ReactDOM.render(<App/>,document.getElementById('root'))