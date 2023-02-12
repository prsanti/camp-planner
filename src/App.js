import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

// components
import Landing from './components/Landing';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>hello world</h1>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Landing/>
  );
}

export default App;


// import './App.css';

// import Home from "./components/Home"
// import Login from "./components/Login"
// import Register from "./components/Register/Register"
// import Settings from "./components/Settings"
// import Support from "./components/Support";
// import Navbar from "./components/Navbar"
// import History from "./components/History/History"
// import Logout from "./components/Logout";

// function App() {
//   return (
//     <Router >
//       <div className = "App">
//         <Navbar />
//         <Switch>
//           <Route path = "/support">
//             <Support />
//           </Route>
//           <Route path = "/settings">
//             <Settings />
//           </Route>
//           <Route path = "/login">
//             <Login />
//           </Route>
//           <Route path = "/register">
//             <Register />
//           </Route>
//           <Route path = "/history">
//             <History />
//           </Route>
//           <Route path = "/logout">
//             <Logout />
//           </Route>
//           <Route path = "/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
