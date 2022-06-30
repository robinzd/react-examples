// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

// basic syntax of the jsx file//
// const user = {
//   fname: 'Robinson',
//   lastname: 'Rajiv'
// }

// function functionname(user) {
//   return user.fname + ' ' + user.lastname;
// }

// const name = 'Divya';
// const hello = <h1>{functionname(user)} Weds {name} !</h1>;
// const hello1 = <h1>Hello,{name}</h1>

// function App() {
//   return (
//     <div>
//       {hello}
//       {hello1}
//     </div>

//   );
// }
// basic syntax of the jsx file//

// examples for how props is worked//

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          <h1>Hello,{props.names} and {props.bills}</h1>
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

// examples for how props is worked//


// class  App extends React.Component {
//   render()
//     {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          <h1>Hello,{this.props.names} and {this.props.bills}</h1>
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
//     };
//   }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App; 
