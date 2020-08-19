// import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';



// function getButtonText(){
//     return 'Click On Me!!!';
// }
// Create a react component
const App =  () => {
    const buttonText='Click Me!';
    return (
        <div>
        <label className="label" htmlFor="name">Enter your name: </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor:'blue', color:'white', fontSize:'16px'}} >
            {buttonText}
        </button>
    </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')


);
