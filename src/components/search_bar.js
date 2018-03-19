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
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })}
      />
    );
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
