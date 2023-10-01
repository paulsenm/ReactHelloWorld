// import logo from './logo.svg';
// import './App.css';
// const title = "Hello world";
// function App() {
//   return (
 

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {title} in React!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      appTitle: "Hello World",
      appMessage: "My very first app in React",
      testRandomPropertyName: "Just checking to see if you can add whatever you want here."
    };  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.appTitle}</h1>
          <p>
            {this.state.appMessage}
          </p>
          <p>
            Here's the property we made: {this.state.testRandomPropertyName}
          </p>
        </header>
      </div>
    );
  }
}

export default App;