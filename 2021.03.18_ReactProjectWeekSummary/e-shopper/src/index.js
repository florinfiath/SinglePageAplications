import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader'
import PageMain from './components/pageMain';
import PageFooter from './components/pageFooter'

const App = () => {
    return (
        <>
           <PageHeader/>
           <PageMain/>
           <PageFooter/>
        </>
    )
};
ReactDOM.render(<App/>,document.getElementById('root'))


