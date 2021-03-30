import {combineReducers} from 'redux';

const searchResults = [];


const searchResultsReducer = (results = searchResults, action) => {
    if(action.type === 'SEARCH') {
        searchResults.push(action.payload);
        return [...searchResults]
    }
    return results;
}

export default combineReducers({

 results = searchResultsReducer

})