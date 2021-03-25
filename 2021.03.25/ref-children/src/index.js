import React, { useRef } from 'react';
import ReactDOM from 'react-dom';


const App = () => {

    //hook useRef to access dom elements in

    const divRef = useRef();

    const btnClick = () => {
    // access dom element using useRef
        console.log(divRef.current);
        divRef.current.style = 'background-color: red; border: 1px solid black';
        console.log(divRef.current.childNodes[0]);
        divRef.current.childNodes[0].style = 'width:200px';
      
    }
    return (
        <div ref={divRef}>
            <button onClick={btnClick}>ClickMe</button>
        </div>
    );
};

ReactDOM.render(<App/>,document.getElementById('root'))