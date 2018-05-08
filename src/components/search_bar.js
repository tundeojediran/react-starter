import React, { Component } from "react";

//This is a class based component
class SearchBar extends Component {
  // this is how we define state in a class-based component.
  //functional based components do not have states.
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      // <input onChange={this.onInputChange} />
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) { 
    this.setState({ term });
    this.props.onSearchTermChange(term);

  }

  //   onInputChange(event) {
  //       console.log(event.target.value);
  //   }
}

//This is a functional component
// const SearchBar = () => {
//     return <input />;
// }

export default SearchBar;
