import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDG96YPaZpVOw0zusQ-w3Xges5MCrvScns";

// Create a new component. This component should produce some HTML.


//This is a functional component
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));