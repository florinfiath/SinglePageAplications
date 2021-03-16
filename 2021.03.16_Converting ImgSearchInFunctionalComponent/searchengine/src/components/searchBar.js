import React ,{useState}from "react";
import getImages from "../api";

 const SearchBar = (props) => {
  let initState = {
    searchWord: "",
  };

  const [state, setState] = useState(initState);

 const  searchBtnClick = () => {
    getImages(state.searchWord).then((data) => {
      console.log(data);
      props.save(data.hits);
    });
  };

  
    return (
      <div className="container">
        <div className="row">
          <div className="input-group mb-3 mt-3 ">
            <div className="input-group-prepend">
              <button
                onClick={searchBtnClick}
                className="btn btn-outline-secondary"
                type="button"
              >
                Search
              </button>
            </div>
            <input
              value={state.searchWord}
              onChange={(e) => {
                setState({searchWord: e.target.value });
              }}
              type="text"
              className="form-control"
              placeholder="Search Word"
              aria-label=""
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    );
  
}

export default SearchBar;
