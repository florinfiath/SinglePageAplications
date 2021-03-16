//Object destructuring

import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';



const App = () => {


    const initState = {
       val1: '',
       val2: ''
    }

    const [state, setState] = useState(initState);




    useEffect(() => {
        // same with componentDidmount in a class component
        // any code which will be written here is going to be called one time after first render
        console.log('after first render one time');

        return () => {
            // any code which will be written here is going to be called directly before the component is deleted
            console.log('will be called before the component is deleted');
        }
    }, []);

    useEffect(() => {
        // not the same with componentDidupdate on the class component , because componentDidupdate is going to be called only after state changing but not on the first time

        // any code which will be written here is going to be called first time after render and after each change on the state 
        console.log('first time after render and after each changing on the state');
    });
    
    useEffect(()=>{
       // any code which will be written here is going to be called on the first time after render every time when val1(inside the state)is changed
        console.log('on the first time after render,every time when v1(inside the state) is changed;');

    }, [state.val1])

    const btnClick = () => {
          setState({...state, val1: 'anything'})
    }

    return ( 
        <>
        <h1>LifeCycle methods on functional components</h1>
        <button onClick={btnClick}>Click me</button>
        
        </>
    )

    
}

ReactDOM.render(<App/>, document.getElementById('root'));

