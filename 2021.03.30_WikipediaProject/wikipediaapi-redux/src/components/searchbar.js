import React, { useRef }  from 'react';
import { connect } from 'react-redux';
import { insertAction } from '../actions';

import {
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";


const SearchBar = (props) => {
console.log('searchBar props', props);

const searchInpRef = useRef();

const searchBtnClick = () => {
    console.log(searchInpRef.current.value);
    props.dispatch(insertAction(searchInpRef.current.value));
    //dispatch will : 
    // 1 . run the action function and get the results
    // 2 . change the main state depending on the action type
    // 3 . rerender any components which are connected to the main state
}
   
    return (
      <Container>
        <Row>
          <InputGroup className="mb-3 mt-3">
            <InputGroup.Prepend>
              <Button onClick={searchBtnClick} variant="outline-secondary">Search</Button>
            </InputGroup.Prepend>
            <FormControl ref={searchInpRef} aria-describedby="basic-addon1" />
          </InputGroup>
        </Row>
      </Container>
    );

}


export default connect(null)(SearchBar)