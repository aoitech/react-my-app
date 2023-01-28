// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

import React from 'react';
import HelloMessageFunction from './HelloMessageFunction';

// classコンポーネント(初期の書き方)
// class HelloMessageClass extends React.Component {
//   render() {
//     return <div>Hello redimpulz</div>;
//   }
// }



export default function App() {
  return (
    <div>
      {/* <HelloMessageClass /> */}
      <HelloMessageFunction />
    </div>
  );
}
