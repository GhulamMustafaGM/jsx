// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// Create a react component 

const App = () => {
    // const buttonText = 'Click Me!';
    return (
        <div>
            <lable class = "lable" for="name">Enter name: </lable>
            <input id="name" type = "text" />
            <button style={{ backgroundColor: 'blue', color: 'white'}}> {getButtonText()} </button>
        </div>
    );
};

// Take the react component and show it on the screen 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);