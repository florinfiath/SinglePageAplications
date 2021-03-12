import React from "react";
import getImages from "../api";

class SearchBar extends React.Component {
  state = {
    searchWord: "",
  };

  searchBtnClick = () => {
    getImages(this.state.searchWord).then((data) => {
      console.log(data);
      this.props.save(data.hits);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="input-group mb-3 mt-3 ">
            <div className="input-group-prepend">
              <button
                onClick={this.searchBtnClick}
                className="btn btn-outline-secondary"
                type="button"
              >
                Search
              </button>
            </div>
            <input
              value={this.state.searchWord}
              onChange={(e) => {
                this.setState({searchWord: e.target.value });
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
}

export default SearchBar;
